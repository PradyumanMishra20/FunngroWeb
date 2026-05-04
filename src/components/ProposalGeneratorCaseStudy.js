import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ProposalGeneratorCaseStudy = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: '🤖',
      title: 'AI-Powered Generation',
      description: 'Advanced GPT-4 integration creates compelling, personalized proposals in seconds',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Generate complete proposals in under 30 seconds instead of hours',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '🎨',
      title: 'Full Customization',
      description: 'Edit every aspect of your proposal with our intuitive drag-and-drop editor',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Track proposal performance, conversion rates, and client engagement',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🔄',
      title: 'Template Library',
      description: '50+ professional templates for every industry and project type',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: '💼',
      title: 'Client Management',
      description: 'Organize clients, track communications, and manage proposal pipeline',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const techStack = [
    { name: 'Next.js', category: 'Frontend', icon: '▲', level: 95 },
    { name: 'TypeScript', category: 'Frontend', icon: '📘', level: 90 },
    { name: 'Tailwind CSS', category: 'Frontend', icon: '🎨', level: 95 },
    { name: 'OpenAI API', category: 'AI/ML', icon: '🤖', level: 88 },
    { name: 'Node.js', category: 'Backend', icon: '🟢', level: 92 },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘', level: 85 },
    { name: 'Stripe', category: 'Payments', icon: '💳', level: 90 },
    { name: 'AWS', category: 'Cloud', icon: '☁️', level: 87 },
  ];

  const results = [
    { metric: '10x', description: 'Faster proposal creation' },
    { metric: '85%', description: 'Client acceptance rate' },
    { metric: '500+', description: 'Active freelancers' },
    { metric: '50K+', description: 'Proposals generated' },
  ];

  const screenshots = [
    {
      title: 'Dashboard Overview',
      description: 'Clean, intuitive dashboard for managing all proposals',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format&webp'
    },
    {
      title: 'AI Proposal Generator',
      description: 'Smart AI interface that understands your requirements',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&auto=format&webp'
    },
    {
      title: 'Template Editor',
      description: 'Powerful drag-and-drop editor for perfect customization',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&webp'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Track performance and optimize your proposal strategy',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format&webp'
    }
  ];

  return (
    <section id="proposal-generator" className="section-padding section-light section-divider">
      <div className="container-tight">
        {/* Case Study Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
          ref={ref}
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full mb-6">
            <span className="text-purple-400 text-sm font-medium">CASE STUDY</span>
          </div>
          <h1 
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
            PROPOSAL GENERATOR SAAS
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transforming how freelancers create and win proposals with AI-powered automation
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {['overview', 'problem', 'solution', 'features', 'tech', 'results'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-white/10'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <div className="max-w-6xl mx-auto">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {/* Hero Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&auto=format&webp"
                  alt="Proposal Generator Dashboard"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-bold text-white mb-2">Proposal Generator Platform</h3>
                  <p className="text-gray-300">AI-powered proposal creation for modern freelancers</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {results.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-md border border-white/10 rounded-xl p-6 text-center"
                  >
                    <div className="text-3xl font-bold text-gradient mb-2">{result.metric}</div>
                    <div className="text-gray-400 text-sm">{result.description}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Problem Tab */}
          {activeTab === 'problem' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 backdrop-blur-md border border-red-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">The Challenge</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-400">⏱️</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Time-Consuming Process</h4>
                      <p className="text-gray-300">Freelancers spend 3-5 hours writing each proposal, taking away from billable work</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-400">📝</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Inconsistent Quality</h4>
                      <p className="text-gray-300">Manual writing leads to varying quality and missed opportunities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-400">🎯</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Low Conversion Rates</h4>
                      <p className="text-gray-300">Average proposal acceptance rate below 30% due to poor targeting and presentation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-white mb-4">Market Research Findings</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">73%</div>
                    <div className="text-gray-400 text-sm">of freelancers struggle with proposal writing</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-2">4.2hrs</div>
                    <div className="text-gray-400 text-sm">average time per proposal</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">28%</div>
                    <div className="text-gray-400 text-sm">average conversion rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Solution Tab */}
          {activeTab === 'solution' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 backdrop-blur-md border border-green-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Our Solution</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We built an AI-powered SaaS platform that transforms proposal creation from a time-consuming chore into a streamlined, automated process. By leveraging advanced AI technology and intuitive design, we help freelancers create compelling, personalized proposals in minutes, not hours.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-400">🤖</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">AI-Powered Content</h4>
                      <p className="text-gray-300">GPT-4 integration generates compelling, context-aware proposals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-400">⚡</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">30-Second Generation</h4>
                      <p className="text-gray-300">Complete proposals ready in under 30 seconds</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-400">🎯</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Smart Personalization</h4>
                      <p className="text-gray-300">AI analyzes client needs and customizes content</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-400">📊</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Performance Analytics</h4>
                      <p className="text-gray-300">Track conversion rates and optimize strategies</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process Flow */}
              <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-white mb-6">How It Works</h4>
                <div className="space-y-4">
                  {[
                    'Input project requirements and client details',
                    'AI analyzes and generates tailored proposal content',
                    'Review and customize with our intuitive editor',
                    'Send professional proposal with tracking',
                    'Monitor performance and optimize future proposals'
                  ].map((step, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-300">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Tech Stack Tab */}
          {activeTab === 'tech' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-slate-900/50 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Technology Stack</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">{tech.icon}</span>
                      </div>
                      <h4 className="text-white font-medium mb-1">{tech.name}</h4>
                      <p className="text-gray-500 text-xs mb-2">{tech.category}</p>
                      <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                          style={{ width: `${tech.level}%` }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-md border border-blue-500/20 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-white mb-4">Architecture Highlights</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span className="text-gray-300">Serverless architecture with AWS Lambda</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full" />
                    <span className="text-gray-300">Real-time collaboration with WebSocket</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full" />
                    <span className="text-gray-300">Optimized database queries with PostgreSQL</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                    <span className="text-gray-300">CDN delivery for lightning-fast performance</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Results Tab */}
          {activeTab === 'results' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Impact & Results</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {[
                    { metric: '10x', label: 'Faster Creation', desc: 'From 4 hours to 25 minutes' },
                    { metric: '85%', label: 'Acceptance Rate', desc: 'Industry-leading conversion' },
                    { metric: '500+', label: 'Active Users', desc: 'Growing rapidly' },
                    { metric: '50K+', label: 'Proposals', desc: 'Generated to date' }
                  ].map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-4xl font-bold text-gradient mb-2">{result.metric}</div>
                      <div className="text-white font-medium mb-1">{result.label}</div>
                      <div className="text-gray-400 text-sm">{result.desc}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="bg-slate-800/50 rounded-xl p-6">
                  <h4 className="text-white font-semibold mb-4">User Testimonials</h4>
                  <blockquote className="text-gray-300 italic">
                    "Proposal Generator transformed my freelance business. I went from spending hours on proposals to closing deals 3x faster. The AI understands exactly what clients want to hear."
                  </blockquote>
                  <div className="mt-4 text-gray-400">- Sarah Chen, Freelance Designer</div>
                </div>
              </div>

              {/* Screenshots */}
              <div>
                <h4 className="text-xl font-semibold text-white mb-6">Platform Screenshots</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {screenshots.map((screenshot, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative rounded-xl overflow-hidden"
                    >
                      <img
                        src={screenshot.image}
                        alt={screenshot.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h5 className="text-white font-semibold">{screenshot.title}</h5>
                        <p className="text-gray-300 text-sm">{screenshot.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 backdrop-blur-md border border-purple-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Want to See More?</h3>
            <p className="text-gray-300 mb-6">Check out the live demo or explore the source code</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://proposal-generator-demo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Live Demo
              </motion.a>
              <motion.a
                href="https://github.com/pradyumanmishra/proposal-generator"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-slate-800/50 text-white font-semibold rounded-xl border border-white/20 transition-all duration-300 hover:bg-slate-700/50 hover:border-white/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Code
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProposalGeneratorCaseStudy;
