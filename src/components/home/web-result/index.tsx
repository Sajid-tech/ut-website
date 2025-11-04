import CountUp from 'react-countup'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { WebResultTagList } from '../../../data/pageData'

function WebResult() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <section id='aboutus' className="relative overflow-hidden">
      <div className='2xl:py-24 py-16'>
        <div className='container'>
          {/* New Layout - Split Screen Design */}
          <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
            
            {/* Left Column - Content */}
            <motion.div 
              className="flex flex-col gap-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Header */}
              <div className='flex flex-col gap-4'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight'>
                  Crafting Digital Excellence Through 
                  <span className='bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text'> Innovation & Strategy</span>
                </h1>
                
                <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
                  We're a full-spectrum digital partner helping brands transform their digital presence. 
                  From strategy to execution, we bridge creativity and technology for measurable results.
                </p>
              </div>

              {/* Tech Stack Tags - Vertical Layout */}
              <div className='flex flex-col gap-3'>
                <h3 className='text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide'>
                  Powered By
                </h3>
                <div className='flex flex-wrap gap-3'>
                  {WebResultTagList?.map((items: any, index: number) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className={`inline-flex items-center gap-2 py-2 px-4 rounded-lg ${items.bg_color} ${items.txt_color} backdrop-blur-sm border border-white/20`}
                    >
                      <img
                        src={items.image}
                        alt={items.name}
                        width={24}
                        height={24}
                        className="flex-shrink-0"
                      />
                      <span className='text-sm font-medium whitespace-nowrap'>
                        {items.name}
                      </span>
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <motion.div 
                className="flex gap-4 mt-4"
                whileHover="hover"
              >
                <Link
                  to="/contact"
                  className="group relative flex items-center gap-3 py-4 px-8 rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">Start Your Project</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
                
                <Link
                  to="/about"
                  className="group flex items-center gap-3 py-4 px-8 rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Column - Stats & Metrics */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 lg:gap-8">
                {/* Client Stat */}
                <motion.div 
                  className="relative bg-white dark:bg-gray-800 rounded-md p-6 lg:p-8  border border-gray-100 dark:border-gray-700"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div ref={ref} className="text-center">
                    <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-2">
                      <sup className="text-2xl lg:text-3xl">+</sup>
                      {inView ? <CountUp start={0} end={30} duration={2.5} /> : '0'}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Satisfied Clients</p>
                  </div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </motion.div>

                {/* Experience Stat */}
                <motion.div 
                  className="relative bg-white dark:bg-gray-800 rounded-md p-6 lg:p-8  border border-gray-100 dark:border-gray-700"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="text-center">
                    <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-2">
                      <sup className="text-2xl lg:text-3xl">+</sup>
                      {inView ? <CountUp start={0} end={10} duration={2.5} delay={0.5} /> : '0'}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Years Experience</p>
                  </div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                </motion.div>

                {/* Projects Stat */}
                <motion.div 
                  className="relative bg-white dark:bg-gray-800 rounded-md p-6 lg:p-8  border border-gray-100 dark:border-gray-700 col-span-2"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="text-center">
                    <div className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-3">
                      <sup className="text-3xl lg:text-4xl">+</sup>
                      {inView ? <CountUp start={0} end={50} duration={2.5} delay={1} /> : '0'}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium text-lg">Projects Delivered</p>
                  </div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
                </motion.div>
              </div>

              {/* Mission Statement */}
              <motion.div 
                className="mt-8 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-md border border-indigo-100 dark:border-indigo-800/30"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-gray-700 dark:text-gray-300 text-center italic">
                  "Our mission is to bridge creativity and technology so you can focus on growth. 
                  We deliver practical, scalable, and human-centered solutions."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-1000" />
    </section>
  )
}

export default WebResult