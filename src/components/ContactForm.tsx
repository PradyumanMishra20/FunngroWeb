import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Loader2, Send } from 'lucide-react'
import { contact } from '../data/site'
import { cn } from '../lib/cn'

type Fields = { name: string; email: string; subject: string; message: string }
type Errors = Partial<Record<keyof Fields, string>>
type Status = 'idle' | 'submitting' | 'success' | 'error'

const EMPTY: Fields = { name: '', email: '', subject: '', message: '' }
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values: Fields): Errors {
  const errors: Errors = {}
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Please enter a valid email address.'
  if (values.subject.trim().length < 3) errors.subject = 'Give the message a subject.'
  if (values.message.trim().length < 10) errors.message = 'A little more detail, please.'
  return errors
}

/** Falls back to the visitor's mail client when no form endpoint is configured. */
function openMailClient(values: Fields) {
  const body = `${values.message}\n\n— ${values.name} (${values.email})`
  window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
    values.subject,
  )}&body=${encodeURIComponent(body)}`
}

const fieldClass =
  'w-full rounded-lg border bg-ink-800/50 px-4 py-3 text-[0.95rem] text-fg placeholder:text-faint/70 transition-colors duration-300 focus:outline-none'

export function ContactForm() {
  const [values, setValues] = useState<Fields>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const update = (key: keyof Fields, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
    if (status === 'success' || status === 'error') setStatus('idle')
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus('error')
      setStatusMessage('Please fix the highlighted fields.')
      return
    }

    setStatus('submitting')
    setStatusMessage('Sending your message…')

    if (!contact.formEndpoint) {
      openMailClient(values)
      setStatus('success')
      setStatusMessage('Your mail app should be open with the message ready to send.')
      return
    }

    try {
      const response = await fetch(contact.formEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!response.ok) throw new Error(`Request failed with ${response.status}`)
      setValues(EMPTY)
      setStatus('success')
      setStatusMessage("Message sent. I'll get back to you soon.")
    } catch {
      setStatus('error')
      setStatusMessage(`Something went wrong. You can email me directly at ${contact.email}.`)
    }
  }

  const fields = [
    { key: 'name' as const, label: 'Name', type: 'text', placeholder: 'Your name', autoComplete: 'name' },
    { key: 'email' as const, label: 'Email', type: 'email', placeholder: 'you@example.com', autoComplete: 'email' },
    { key: 'subject' as const, label: 'Subject', type: 'text', placeholder: "What's this about?", autoComplete: 'off' },
  ]

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field, index) => (
          <div key={field.key} className={index === 2 ? 'sm:col-span-2' : undefined}>
            <label htmlFor={field.key} className="label mb-2 block">
              {field.label}
            </label>
            <input
              id={field.key}
              name={field.key}
              type={field.type}
              autoComplete={field.autoComplete}
              placeholder={field.placeholder}
              value={values[field.key]}
              onChange={(event) => update(field.key, event.target.value)}
              aria-invalid={Boolean(errors[field.key])}
              aria-describedby={errors[field.key] ? `${field.key}-error` : undefined}
              className={cn(
                fieldClass,
                errors[field.key]
                  ? 'border-red-400/70 focus:border-red-400'
                  : 'border-line focus:border-accent-soft',
              )}
            />
            {errors[field.key] ? (
              <p id={`${field.key}-error`} className="mt-2 font-mono text-[0.68rem] text-red-400">
                {errors[field.key]}
              </p>
            ) : null}
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="message" className="label mb-2 block">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell me about the idea, the project, or just say hello."
          value={values.message}
          onChange={(event) => update('message', event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={cn(
            fieldClass,
            'resize-y',
            errors.message
              ? 'border-red-400/70 focus:border-red-400'
              : 'border-line focus:border-accent-soft',
          )}
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 font-mono text-[0.68rem] text-red-400">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="group inline-flex min-h-11 items-center gap-2.5 rounded-full bg-fg px-6 py-3.5 font-mono text-[0.72rem] tracking-[0.14em] uppercase text-ink-900 transition-colors duration-300 hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? (
            <Loader2 size={14} aria-hidden className="animate-spin" />
          ) : status === 'success' ? (
            <Check size={14} aria-hidden />
          ) : (
            <Send
              size={14}
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          )}
          {status === 'submitting' ? 'Sending' : status === 'success' ? 'Sent' : 'Send message'}
        </button>

        <AnimatePresence mode="wait">
          {statusMessage && status !== 'idle' ? (
            <motion.p
              key={statusMessage}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className={cn(
                'font-mono text-[0.7rem] leading-relaxed',
                status === 'error' ? 'text-red-400' : 'text-muted',
              )}
            >
              {statusMessage}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>

      <p role="status" aria-live="polite" className="sr-only">
        {statusMessage}
      </p>
    </form>
  )
}
