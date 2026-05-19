import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicyContent = () => {
  const sections = [
    {
      title: '1. Information We Collect',
      content:
        'Information may be collected when you contact through forms, email, or project inquiries.',
      items: [
        'Name and email address',
        'Project details and requirements',
        'Communication preferences',
        'Any information voluntarily submitted'
      ]
    },
    {
      title: '2. How Information Is Used',
      content:
        'Collected information is used only for communication, project coordination, and improving website experience.',
      items: [
        'Responding to inquiries',
        'Discussing projects and timelines',
        'Improving usability and performance',
        'Providing service-related updates'
      ]
    },
    {
      title: '3. Information Sharing',
      content:
        'Personal information is never sold or shared unnecessarily.',
      items: [
        'Trusted services required to operate the website',
        'Legal obligations if required',
        'Cases where explicit permission is provided'
      ]
    },
    {
      title: '4. Data Security',
      content:
        'Reasonable measures are taken to protect information, although no online system can guarantee complete security.'
    },
    {
      title: '5. Cookies & Analytics',
      content:
        'Analytics or cookies may be used to understand website performance and visitor interaction patterns.'
    },
    {
      title: '6. Your Rights',
      content:
        'You may request updates, access, or deletion of personal information.',
      items: [
        'Request stored information',
        'Request deletion of personal data',
        'Opt out of communication'
      ]
    },
    {
      title: '7. Children’s Privacy',
      content:
        'This website is not intended for children under 13, and information is not knowingly collected from them.'
    },
    {
      title: '8. Policy Updates',
      content:
        'This Privacy Policy may change over time to reflect updates in services, functionality, or legal requirements.'
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f6f1e8] text-[#1a1814]">
      
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10rem] right-[-8rem] w-[38rem] h-[38rem] rounded-full bg-[#c6a56a]/10 blur-3xl" />

        <div className="absolute bottom-[-12rem] left-[-10rem] w-[34rem] h-[34rem] rounded-full bg-[#7c8b6b]/10 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.035] mix-blend-multiply bg-[radial-gradient(circle_at_center,black_1px,transparent_1px)] bg-[size:26px_26px]" />
      </div>

      <div
        className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 py-24"
        style={{
          backgroundImage:
            'linear-gradient(to bottom right, rgba(255,255,255,0.22), rgba(255,255,255,0))'
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
            className="font-display text-[clamp(3.2rem,7vw,6.5rem)] leading-[0.9] tracking-[-0.065em] text-[#181512] max-w-3xl mb-10"
          >
            Privacy Policy
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
            This page explains how information is collected, used, and handled
            while interacting with this website and its services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex items-center gap-3 text-sm text-[#7a746b]"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#c6a56a]" />

            <span>
              Last updated — {new Date().toLocaleDateString()}
            </span>
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

              <h2 className="font-display text-[1.9rem] tracking-[-0.04em] text-[#181512] mb-5">
                9. Contact
              </h2>

              <p className="text-[#5f5a52] leading-relaxed mb-8 max-w-2xl">
                Questions regarding this Privacy Policy or personal information
                requests can be sent directly through email.
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
              This Privacy Policy remains effective unless updated or replaced
              by a newer version published on this website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyContent;