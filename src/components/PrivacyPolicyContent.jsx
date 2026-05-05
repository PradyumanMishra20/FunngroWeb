import React from 'react';

const PrivacyPolicyContent = () => {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
      
      <p className="text-gray-300 mb-6">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">1. Information We Collect</h2>
        <p className="text-gray-300 mb-4">
          We collect information you provide directly to us, such as when you contact us through our website or 
          submit a project inquiry. This may include:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Name and email address</li>
          <li>Project details and requirements</li>
          <li>Communication preferences</li>
          <li>Any other information you voluntarily provide</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
        <p className="text-gray-300 mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Respond to your inquiries and provide project consultations</li>
          <li>Send you information about our services</li>
          <li>Improve our website and services</li>
          <li>Communicate with you about your projects</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">3. Information Sharing</h2>
        <p className="text-gray-300 mb-4">
          We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
          except as described in this privacy policy:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Service providers who assist in operating our website</li>
          <li>When required by law or to protect our rights</li>
          <li>With your explicit consent</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">4. Data Security</h2>
        <p className="text-gray-300 mb-4">
          We implement appropriate security measures to protect your personal information against unauthorized access, 
          alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">5. Cookies and Tracking</h2>
        <p className="text-gray-300 mb-4">
          Our website may use cookies and similar tracking technologies to enhance your experience. You can control 
          cookies through your browser settings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">6. Your Rights</h2>
        <p className="text-gray-300 mb-4">
          You have the right to:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Access and update your personal information</li>
          <li>Request deletion of your personal information</li>
          <li>Opt-out of marketing communications</li>
          <li>Request a copy of your data</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">7. Children's Privacy</h2>
        <p className="text-gray-300 mb-4">
          Our website is not intended for children under 13. We do not knowingly collect personal information 
          from children under 13.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">8. Changes to This Policy</h2>
        <p className="text-gray-300 mb-4">
          We may update this privacy policy from time to time. We will notify you of any changes by posting the new 
          policy on this page and updating the "Last updated" date.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">9. Contact Information</h2>
        <p className="text-gray-300 mb-4">
          If you have any questions about this Privacy Policy, please contact us:
        </p>
        <div className="bg-slate-800/50 rounded-lg p-4 mt-4">
          <p className="text-gray-300">
            Email: pradyuman212@gmail.com
          </p>
        </div>
      </section>

      <div className="border-t border-white/10 pt-6 mt-8">
        <p className="text-gray-400 text-sm">
          This Privacy Policy is effective as of the date stated above and will remain in effect except 
          with respect to any changes in its provisions in the future, which will be in effect immediately 
          after being posted on this website.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyContent;
