import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const SERVICE_ID = "service_03w75yq";
const TEMPLATE_ID = "template_tgp7lh9";
const PUBLIC_KEY = "cIKru12ICQKpeeJtC";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // 'success', 'error', ''
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name.trim()) {
      setSubmitStatus('error');
      setErrorMessage('Please enter your name.');
      return;
    }
    
    if (!validateEmail(formData.email)) {
      setSubmitStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    
    if (!formData.message.trim()) {
      setSubmitStatus('error');
      setErrorMessage('Please enter your project details.');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('');
    setErrorMessage('');
    
    try {
      // Prepare template params with EXACT field names matching EmailJS template
      // IMPORTANT: These must match your EmailJS template variables exactly
      const templateParams = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        project: formData.project.trim() || "Not specified"
      };
      
      // Comprehensive debugging
      console.log('=== EMAILJS DEBUG INFO ===');
      console.log('SERVICE_ID:', SERVICE_ID);
      console.log('TEMPLATE_ID:', TEMPLATE_ID);
      console.log('PUBLIC_KEY:', PUBLIC_KEY ? 'Present' : 'Missing');
      console.log('Template Params:', templateParams);
      console.log('All params have values:', Object.values(templateParams).every(val => val && val.trim()));
      console.log('========================');
      
      // Validate templateParams before sending
      Object.keys(templateParams).forEach(key => {
        if (!templateParams[key] || templateParams[key].trim() === '') {
          throw new Error(`Template parameter '${key}' is empty or missing`);
        }
      });
      
      // Send email using correct emailjs.send syntax
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
      
      console.log('EmailJS SUCCESS:', response);
      console.log('Response status:', response.status);
      console.log('Response text:', response.text);
      
      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', project: '', message: '' });
      } else {
        throw new Error(`EmailJS returned status: ${response.status}, text: ${response.text}`);
      }
    } catch (error) {
      console.error('=== EMAILJS ERROR DETAILS ===');
      console.error('Full error object:', error);
      console.error('Error text:', error.text || 'No error text available');
      console.error('Error status:', error.status || 'No status available');
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('==========================');
      
      setSubmitStatus('error');
      
      // Specific error handling for common EmailJS issues
      if (error.text) {
        if (error.text.includes('The service ID is required')) {
          setErrorMessage('EmailJS configuration error: Service ID is invalid or missing.');
        } else if (error.text.includes('The template ID is required')) {
          setErrorMessage('EmailJS configuration error: Template ID is invalid or missing.');
        } else if (error.text.includes('The user ID is required')) {
          setErrorMessage('EmailJS configuration error: Public Key is invalid or missing.');
        } else if (error.text.includes('email')) {
          setErrorMessage('Email validation failed. Please check the email address.');
        } else if (error.text.includes('template')) {
          setErrorMessage('Template error. Please check your EmailJS template variables.');
        } else {
          setErrorMessage(`EmailJS error: ${error.text}`);
        }
      } else {
        setErrorMessage(`Failed to send message: ${error.message || 'Unknown error'}. Please try again later.`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding section-medium">
      <div className="container-tight">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
          ref={ref}
        >
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: "700",
              letterSpacing: "-0.02em",
              background: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Let's Build Something
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-1 bg-gradient-to-r from-transparent to-blue-500 rounded-full" />
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
            <div className="w-8 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded-full" />
          </div>
          <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            Let's discuss how I can help you achieve your business goals. I deliver revenue-generating applications and operational efficiency.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-md border border-white/10 rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/20 border border-green-500/50 rounded-xl p-4 text-center"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-green-400 font-medium">Message sent successfully! I'll get back to you soon.</span>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/20 border border-red-500/50 rounded-xl p-4 text-center"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-red-400 font-medium">{errorMessage}</span>
                  </div>
                </motion.div>
              )}
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Rahul Sharma"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="rahul@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="project" className="block text-white font-medium mb-2">
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="" className="bg-slate-800">Select a project type</option>
                  <option value="saas" className="bg-slate-800">SaaS Application</option>
                  <option value="website" className="bg-slate-800">Website/Web App</option>
                  <option value="mobile" className="bg-slate-800">Mobile App</option>
                  <option value="consulting" className="bg-slate-800">Technical Consulting</option>
                  <option value="other" className="bg-slate-800">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-white/10 rounded-xl text-white placeholder-gray-400 resize-none transition-all duration-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Tell me about your project, goals, and timeline..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Sending...' : 'Start Your Project'}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 
                className="text-2xl sm:text-3xl font-bold mb-6 leading-tight"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: "700",
                  letterSpacing: "-0.02em",
                  background: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                Why Work With Me?
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I bring years of experience building scalable SaaS applications and web solutions 
                that drive real business results. Let's discuss how I can help bring your vision to life.
              </p>
            </div>

            {/* Value Propositions */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Fast Development</h4>
                  <p className="text-gray-400">Rapid prototyping and iterative development to get your product to market quickly.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Quality Code</h4>
                  <p className="text-gray-400">Clean, maintainable code with comprehensive testing and documentation.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Dedicated Support</h4>
                  <p className="text-gray-400">Ongoing support and maintenance to ensure your project continues to thrive.</p>
                </div>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <h4 className="font-semibold text-white mb-4">Get in Touch Directly</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-300">pradyuman212@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-300">Response within 24 hours</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
