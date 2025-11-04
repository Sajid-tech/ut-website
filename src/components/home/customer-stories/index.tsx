import { motion } from "framer-motion";

function CustomerStories() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id='client' className="   relative w-full  
          before:absolute  before:w-full before:h-full 
          before:bg-gradient-to-r before:from-indigo-200 before:via-white before:to-purple-200 
          before:rounded-full before:blur-3xl before:-z-10
          dark:before:from-indigo-900 dark:before:via-black dark:before:to-purple-900">
      <div className=' '>
        <div className='container'>
          <motion.div 
            className='flex flex-col gap-5'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Header */}
            <motion.div 
              className='text-center max-w-2xl mx-auto'
              variants={itemVariants}
            >
              <h2 className='text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-4'>
                Client Success       <span className='instrument-font italic font-normal dark:text-white/70'>Stories</span> 
              </h2>
              <p className='text-gray-600 dark:text-gray-400'>
                Trusted by industry leaders and growing businesses
              </p>
            </motion.div>

            {/* Compact Grid Layout */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
              
              {/* Testimonial 1 */}
              <motion.div 
                className="flex flex-col border border-gray-400 dark:border-gray-700"
                variants={itemVariants}
              >
                <div className="h-[15rem] bg-cover bg-center" 
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop)' }}>
                </div>
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                      <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm">KS</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Kabir Shah</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">National Association</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    "Transformed our outdated systems into a sleek digital platform that our members love."
                  </blockquote>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="#4F46E5">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Testimonial 2 */}
              <motion.div 
                className="flex flex-col border border-gray-400 dark:border-gray-700"
                variants={itemVariants}
              >
                <div className="h-[15rem] bg-cover bg-center" 
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop)' }}>
                </div>
                <div className="p-6 flex-1 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                      <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm">AS</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">Anurag Singh</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Industry Council</p>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    "Annual conference executed with precision—every detail was perfect from planning to promotion."
                  </blockquote>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="#4F46E5">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Stats Card */}
              <motion.div 
                className="flex flex-col border border-indigo-400 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/20"
                variants={itemVariants}
              >
                <div className="h-[15rem] bg-cover bg-center" 
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop)' }}>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Client Success</h3>
                    <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">91%</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      of clients recommend our services
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Satisfaction</span>
                      <span>94%</span>
                    </div>
                    <div className="w-full bg-indigo-200 dark:bg-indigo-800 h-1">
                      <div className="bg-indigo-600 h-1 w-94"></div>
                    </div>
                    
                    <div className="flex justify-between text-xs">
                      <span>Retention</span>
                      <span>89%</span>
                    </div>
                    <div className="w-full bg-indigo-200 dark:bg-indigo-800 h-1">
                      <div className="bg-indigo-600 h-1 w-89"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Bottom Row - Additional Testimonials */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={itemVariants}
            >
              
              {/* Testimonial 3 */}
              <div className="flex border border-gray-400 dark:border-gray-700">
                <div className="w-24 h-24 bg-cover bg-center flex-shrink-0" 
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face)' }}>
                </div>
                <div className="p-6 flex-1 flex flex-col gap-3">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Priya Sharma</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Tech Corp</p>
                  </div>
                  <blockquote className="text-gray-700 dark:text-gray-300 text-sm">
                    "From branding to analytics, they've been our trusted partner. Smart and consistently creative."
                  </blockquote>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} width="14" height="14" viewBox="0 0 24 24" fill="#4F46E5">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial 4 */}
              <div className="flex border border-gray-400 dark:border-gray-700">
                <div className="w-24 h-24 bg-cover bg-center flex-shrink-0" 
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face)' }}>
                </div>
                <div className="p-6 flex-1 flex flex-col gap-3">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Rahul Verma</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Startup Founder</p>
                  </div>
                  <blockquote className="text-gray-700 dark:text-gray-300 text-sm">
                    "Exceptional service and attention to detail. They understood our vision perfectly."
                  </blockquote>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} width="14" height="14" viewBox="0 0 24 24" fill="#4F46E5">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Metrics Bar */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-b border-gray-400 dark:border-gray-700 py-8"
              variants={itemVariants}
            >
              {[
                { number: '300+', label: 'Happy Clients' },
                { number: '98%', label: 'Success Rate' },
                { number: '50+', label: 'Projects' },
                { number: '10+', label: 'Years Experience' }
              ].map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-1">
                    {metric.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {metric.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CustomerStories