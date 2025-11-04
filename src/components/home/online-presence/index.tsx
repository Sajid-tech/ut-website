import { Icon } from '@iconify/react/dist/iconify.js'
import { motion } from 'framer-motion'
import { onlinePresenceList } from '../../../data/pageData'

function OnlinePresence() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8
      }
    }
  }

  const itemVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <section id='work'>
      <div className='py-16'>
        <div className='container'>
          <motion.div 
            className='flex flex-col gap-16'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Header Section */}
            <motion.div 
              className='flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8'
              variants={itemVariants}
            >
              <div className='flex-1'>
                <h2 className='text-4xl md:text-5xl font-medium text-gray-900 dark:text-white leading-tight'>
                  Digital Transformations
                  <span className='instrument-font italic font-normal text-indigo-600 dark:text-indigo-400 block'>
                    That Deliver Results
                  </span>
                </h2>
              </div>
              <div className='flex-1'>
                <p className='text-lg text-gray-600 dark:text-gray-400 max-w-md'>
                  Explore how we've helped businesses transform their online presence with innovative digital solutions.
                </p>
              </div>
            </motion.div>

            {/* Projects Grid - 2 Columns */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {onlinePresenceList?.map((items: any, index: number) => (
                <motion.div
                  key={index}
                  className='group flex flex-col cursor-pointer'
                  variants={itemVariants}
                >
                  {/* Image with Overlay */}
                  <div className='relative mb-6 overflow-hidden' style={{ height: '20rem' }}>
                    <img
                      src={items.image}
                      alt={items.title}
                      className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                    
                    {/* Gradient Overlay */}
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                    
                    {/* Action Button */}
                    <a
                      href={items.link || '#'}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='absolute bottom-6 left-6 flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300'
                    >
                      <span className='font-medium'>View Case Study</span>
                      <Icon
                        icon='icon-park-solid:circle-right-up'
                        width='20'
                        height='20'
                      />
                    </a>
                  </div>

                  {/* Content */}
                  <div className='flex flex-col gap-4'>
                    <h3 className='text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300'>
                      {items.title}
                    </h3>
                    
                    {/* Tags */}
                    <div className='flex flex-wrap gap-2'>
                      {Array.isArray(items.tag) ? (
                        items.tag.map((tag: string, tagIndex: number) => (
                          <span
                            key={tagIndex}
                            className='px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm border border-gray-200 dark:border-gray-700 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:border-indigo-300 dark:hover:border-indigo-600 hover:text-indigo-700 dark:hover:text-indigo-300 transition-all duration-200'
                          >
                            {tag}
                          </span>
                        ))
                      ) : (
                        <span className='px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm border border-gray-200 dark:border-gray-700'>
                          {items.tag}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    {items.description && (
                      <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                        {items.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

  
           

            {/* CTA Section */}
            <motion.div 
              className='text-center'
              variants={itemVariants}
            >
              <div className='flex flex-col gap-6 items-center'>
                <h3 className='text-2xl md:text-3xl font-medium text-gray-900 dark:text-white'>
                  Ready to transform your online presence?
                </h3>
                <div className='flex gap-4'>
                  <button className='px-8 py-4 bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors duration-200 flex items-center gap-2'>
                    Start Your Project
                    <Icon icon='icon-park-solid:circle-right-up' width='16' height='16' />
                  </button>
                  <button className='px-8 py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:border-indigo-600 hover:text-indigo-600 transition-all duration-200'>
                    View All Work
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default OnlinePresence