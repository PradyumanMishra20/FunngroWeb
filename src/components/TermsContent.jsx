import React from 'react';

const TermsContent = () => {
  return (
    <div className="prose prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-white mb-6">Terms of Service</h1>
      
      <p className="text-gray-300 mb-6">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
        <p className="text-gray-300 mb-4">
          By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
          If you do not agree to abide by the above, please do not use this service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">2. Services Provided</h2>
        <p className="text-gray-300 mb-4">
          I provide web development services including but not limited to:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Custom website and web application development</li>
          <li>Frontend development using React and modern frameworks</li>
          <li>Backend development and API integration</li>
          <li>UI/UX design consultation</li>
          <li>Website maintenance and optimization</li>
          <li>Technical consultation and project planning</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">3. Client Responsibilities</h2>
        <p className="text-gray-300 mb-4">
          As a client, you agree to:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Provide accurate and complete information for your project</li>
          <li>Respond promptly to requests for feedback and approvals</li>
          <li>Provide necessary content, images, and assets in a timely manner</li>
          <li>Make timely payments as agreed upon in project contracts</li>
          <li>Test deliverables and provide feedback within agreed timeframes</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">4. Payment Terms</h2>
        <p className="text-gray-300 mb-4">
          Payment terms will be specified in individual project agreements. Generally:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>50% deposit required to begin work</li>
          <li>50% final payment upon project completion</li>
          <li>Payment methods: Bank transfer, PayPal, or other agreed methods</li>
          <li>Late payments may incur additional charges</li>
          <li>All prices are subject to change without prior notice</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">5. Project Timeline and Delivery</h2>
        <p className="text-gray-300 mb-4">
          Project timelines will be established in individual agreements. Factors that may affect timeline include:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Complexity and scope of the project</li>
          <li>Client response time for feedback and approvals</li>
          <li>Availability of required assets and content</li>
          <li>Third-party service dependencies</li>
          <li>Unforeseen technical challenges</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">6. Intellectual Property</h2>
        <p className="text-gray-300 mb-4">
          Upon full payment:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>You own the final delivered website/application</li>
          <li>I retain rights to my original code, tools, and processes</li>
          <li>I reserve the right to display the project in my portfolio</li>
          <li>Third-party licenses and assets remain the property of their respective owners</li>
          <li>Custom code developed specifically for you becomes your property</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">7. Confidentiality</h2>
        <p className="text-gray-300 mb-4">
          I agree to keep confidential all proprietary information, including but not limited to:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Business information and strategies</li>
          <li>Customer data and analytics</li>
          <li>Technical specifications and code</li>
          <li>Design concepts and creative materials</li>
        </ul>
        <p className="text-gray-300 mb-4">
          This confidentiality obligation survives the termination of our business relationship.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">8. Limitation of Liability</h2>
        <p className="text-gray-300 mb-4">
          In no event shall I be liable for any indirect, incidental, special, consequential, or punitive damages, 
          including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting 
          from your use of the services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">9. Termination</h2>
        <p className="text-gray-300 mb-4">
          Either party may terminate the service agreement with written notice. Upon termination:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Client pays for all work completed up to termination date</li>
          <li>All confidential information remains confidential</li>
          <li>Delivered work remains client property upon full payment</li>
          <li>Both parties release each other from further obligations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">10. Warranty and Support</h2>
        <p className="text-gray-300 mb-4">
          I warrant that delivered work will be free from defects in material and workmanship for a period of 
          30 days after delivery. This warranty does not cover:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Issues caused by third-party services or plugins</li>
          <li>Damage resulting from client modifications</li>
          <li>Normal wear and tear</li>
          <li>Issues arising from client negligence or misuse</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">11. Governing Law</h2>
        <p className="text-gray-300 mb-4">
          These terms of service are governed by and construed in accordance with the laws of the jurisdiction 
          in which I operate, without regard to its conflict of law provisions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">12. Changes to Terms</h2>
        <p className="text-gray-300 mb-4">
          I reserve the right to modify these terms at any time. Changes will be effective immediately upon posting 
          to this website. Your continued use of the services constitutes acceptance of any changes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-white mb-4">13. Contact Information</h2>
        <p className="text-gray-300 mb-4">
          If you have any questions about these Terms of Service, please contact me:
        </p>
        <div className="bg-slate-800/50 rounded-lg p-4 mt-4">
          <p className="text-gray-300">
            Email: pradyuman212@gmail.com
          </p>
        </div>
      </section>

      <div className="border-t border-white/10 pt-6 mt-8">
        <p className="text-gray-400 text-sm">
          By using this website and services, you acknowledge that you have read, understood, and agree to be bound 
          by these Terms of Service.
        </p>
      </div>
    </div>
  );
};

export default TermsContent;
