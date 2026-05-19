import React from 'react';
import { motion } from 'framer-motion';

const TermsContent = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content:
        'By accessing or using this website, you agree to these Terms of Service. If you do not agree, you should not use the website or services.'
    },
    {
      title: '2. Services',
      content:
        'Services may include frontend development, web application development, UI systems, performance optimization, consultation, and related technical work.',
      items: [
        'Custom websites and web applications',
        'Frontend development with React',
        'UI/UX implementation',
        'Website optimization',
        'Technical consulting and planning'
      ]
    },
    {
      title: '3. Client Responsibilities',
      content:
        'Clients are responsible for providing clear communication and required project materials.',
      items: [
        'Providing accurate project information',
        'Delivering content and assets on time',
        'Giving timely feedback and approvals',
        'Testing deliverables when requested',
        'Completing agreed payments'
      ]
    },
    {
      title: '4. Payments',
      content:
        'Project pricing, timelines, and payment structures are discussed separately before work begins.',
      items: [
        'Deposits may be required before starting',
        'Remaining payments are due upon completion',
        'Late payments may delay delivery',
        'Pricing may vary depending on scope changes'
      ]
    },
    {
      title: '5. Project Timelines',
      content:
        'Delivery timelines depend on project complexity, revisions, communication speed, and third-party dependencies.'
    },
    {
      title: '6. Intellectual Property',
      content:
        'After full payment, the client owns the final delivered project unless stated otherwise.',
      items: [
        'Final deliverables become client property',
        'Pre-existing tools and systems remain developer property',
        'Projects may be displayed in portfolio work',
        'Third-party assets remain owned by their respective creators'
      ]
    },
    {
      title: '7. Confidentiality',
      content:
        'Confidential project information and business details shared during collaboration will remain private and protected.'
    },
    {
      title: '8. Limitation of Liability',
      content:
        'This website and services are provided as-is. Liability for indirect damages, business loss, or third-party issues is limited to the maximum extent permitted by law.'
    },
    {
      title: '9. Termination',
      content:
        'Either party may end a project agreement at any time with written notice.',
      items: [
        'Completed work up to termination must be paid for',
        'Confidential information remains protected',
        'Delivered work remains with the client after payment'
      ]
    },
    {
      title: '10. Warranty & Support',
      content:
        'Reasonable support may be provided after delivery for agreed periods. Issues caused by external services, client modifications, or misuse are not covered.'
    },
    {
      title: '11. Changes to Terms',
      content:
        'These terms may be updated periodically. Continued use of the website means acceptance of the latest version.'
    }
  ];

  return (
  <div className="relative min-h-screen overflow-hidden bg-[#E6E1D7] text-[#2A2A26]">
    {/* Cinematic Ambient Background */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Warm golden glow */}
      <div className="absolute top-[-10rem] right-[-8rem] w-[38rem] h-[38rem] rounded-full bg-[#B08A3E]/8 blur-[160px]" />

      {/* Olive atmospheric glow */}
      <div className="absolute bottom-[-12rem] left-[-10rem] w-[34rem] h-[34rem] rounded-full bg-[#7A7B4F]/10 blur-[170px]" />

      {/* Soft warm vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_70%)]" />

      {/* Subtle paper grain */}
      <div className="absolute inset-0 opacity-[0.022] mix-blend-multiply bg-[radial-gradient(circle_at_center,black_1px,transparent_1px)] bg-[size:28px_28px]" />

      {/* Gentle top-to-bottom tonal wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.20] via-transparent to-black/[0.03]" />
    </div>

    <div
      className="
        relative z-10
        max-w-5xl mx-auto
        px-6 sm:px-8 lg:px-10
        py-24 sm:py-28 lg:py-32
      "
      style={{
        backgroundImage:
          'linear-gradient(135deg, rgba(255,255,255,0.16), rgba(255,255,255,0.02))'
      }}
    >
        {/* Hero */}
        <div className="relative pb-20 mb-20 border-b border-black/[0.05]">
          <div className="absolute -top-24 right-0 w-[30rem] h-[30rem] bg-[#c6a56a]/8 blur-3xl rounded-full pointer-events-none" />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] uppercase tracking-[0.32em] text-[#7a746b] mb-6"
          >
            Legal
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="
              relative z-20
              text-[clamp(3.2rem,7vw,6.5rem)]
              leading-[0.9]
              tracking-[-0.065em]
              max-w-3xl
              mb-10
              font-semibold
              text-[#0F0D0A]
              drop-shadow-[0_1px_0_rgba(255,255,255,0.25)]
            "
            style={{
              fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
              fontWeight: 600,
              letterSpacing: '-0.065em',
              color: '#0F0D0A',
              textRendering: 'optimizeLegibility',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale'
            }}
          >
            Terms of Service
          </motion.h1>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 90, opacity: 1 }}
            transition={{ duration: 0.9 }}
            className="h-px bg-[#c6a56a]/60 mb-10"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="text-[1.08rem] text-[#5f5a52] leading-relaxed max-w-2xl"
          >
            These terms define the rules, responsibilities, and conditions
            related to using this website and working together on projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex items-center gap-3 text-sm text-[#7a746b]"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#c6a56a]" />
            <span>Last updated — {new Date().toLocaleDateString()}</span>
          </motion.div>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: index * 0.06
              }}
              whileHover={{
                y: -6,
                scale: 1.01
              }}
              className="
                group relative overflow-hidden
                rounded-[2.5rem]
                bg-[#fbf7f1]/88
                backdrop-blur-xl
                p-8 sm:p-12
                transition-all duration-700
                border border-black/[0.035]
                shadow-[0_20px_60px_rgba(0,0,0,0.04)]
                hover:shadow-[0_30px_80px_rgba(0,0,0,0.06)]
              "
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c6a56a]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10">
                {/* Accent Line */}
                <div className="w-16 h-px bg-[#c6a56a]/60 mb-8" />

                <div className="flex items-start justify-between gap-6 mb-6">
                  <h2 className="font-display text-[1.8rem] tracking-[-0.04em] leading-tight text-[#181512]">
                    {section.title}
                  </h2>

                  <div className="hidden sm:block w-10 h-px bg-[#c6a56a]/40 mt-4" />
                </div>

                <p className="text-[#5f5a52] leading-relaxed text-[1.02rem] mb-6 max-w-3xl">
                  {section.content}
                </p>

                {section.items && (
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {section.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-[#7a746b] leading-relaxed"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#c6a56a] mt-2.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.section>
          ))}

          {/* Contact */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="
              relative overflow-hidden
              rounded-[2.5rem]
              border border-black/[0.035]
              bg-[#fbf7f1]/88
              backdrop-blur-xl
              p-8 sm:p-12
              shadow-[0_20px_60px_rgba(0,0,0,0.04)]
            "
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c6a56a]/[0.06] rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="w-16 h-px bg-[#c6a56a]/60 mb-8" />

              <h2
                className="text-[1.9rem] tracking-[-0.04em] text-[#181512] mb-5"
                style={{
                  fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
                  fontWeight: 600
                }}
              >
                12. Contact
              </h2>

              <p className="text-[#5f5a52] leading-relaxed mb-8 max-w-2xl">
                For questions regarding these Terms of Service, contact directly
                through email.
              </p>

              <div className="bg-[#f3ede3] border border-black/[0.04] rounded-[2rem] p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <div>
                  <p className="text-[#7a746b] text-xs uppercase tracking-[0.22em] mb-2">
                    Contact Email
                  </p>

                  <a
                    href="mailto:pradyuman212@gmail.com"
                    className="font-medium text-lg text-[#181512] hover:text-[#b08a52] transition-colors duration-300"
                  >
                    pradyuman212@gmail.com
                  </a>
                </div>

                <div className="w-12 h-12 rounded-full bg-[#efe7dc] border border-black/[0.04] flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#181512]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.7}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8m-18 9h18a2 2 0 002-2V7a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Footer */}
          <div className="pt-2 pb-12">
            <p className="text-sm text-[#7a746b] leading-relaxed max-w-2xl">
              By continuing to use this website, you acknowledge that you have
              read and agreed to these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsContent;