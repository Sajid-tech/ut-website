import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Machinery = () => {
  const navigate = useNavigate()

  const machineryData = [
    {
      id: 1,
      name: "Corrugation Machine",
      model: "BHS S-220",
      capacity: "220 meters/min",
      features: [
        "Automatic flute formation",
        "Precision temperature control",
        "Energy efficient operation",
        "Digital monitoring system"
      ],
      specifications: {
        "Max Width": "2.5 meters",
        "Speed": "220 m/min",
        "Power": "450 kW",
        "Flute Types": "A, B, C, E, F"
      },
      image: "https://3.imimg.com/data3/VE/KQ/MY-1000228/craft-paper-plant-500x500.jpg",
      description: "High-speed corrugation machine for producing single, double, and triple-wall boards with precision and consistency."
    },
    {
      id: 2,
      name: "Flexo Printing Machine",
      model: "BOBST F-2000",
      capacity: "300 sheets/hour",
      features: [
        "6-color printing capability",
        "UV drying system",
        "Automatic registration",
        "Quick changeover"
      ],
      specifications: {
        "Printing Colors": "6 stations",
        "Max Sheet Size": "2.2 x 1.6 meters",
        "Resolution": "1200 DPI",
        "Drying": "UV and IR"
      },
      image: "https://3.imimg.com/data3/VE/KQ/MY-1000228/craft-paper-plant-500x500.jpg",
      description: "Advanced flexographic printing machine for high-quality graphics and text on corrugated boards."
    },
    {
      id: 3,
      name: "Die-Cutting Machine",
      model: "JAGENBERG P-350",
      capacity: "7,000 sheets/shift",
      features: [
        "Laser die-making",
        "Automatic sheet feeder",
        "Waste removal system",
        "Precision cutting"
      ],
      specifications: {
        "Cutting Force": "350 tons",
        "Max Thickness": "12 mm",
        "Accuracy": "±0.1 mm",
        "Operation": "Fully automatic"
      },
      image: "https://3.imimg.com/data3/VE/KQ/MY-1000228/craft-paper-plant-500x500.jpg",
      description: "High-precision die-cutting machine for creating custom box designs and complex shapes."
    },
    {
      id: 4,
      name: "Slotting Machine",
      model: "EMBA S-450",
      capacity: "5,000 boxes/hour",
      features: [
        "Computer-controlled operation",
        "Multiple slot patterns",
        "Quick tool change",
        "Safety guards"
      ],
      specifications: {
        "Slotting Width": "450 mm",
        "Speed": "150 strokes/min",
        "Motor Power": "15 kW",
        "Control": "CNC system"
      },
      image: "https://3.imimg.com/data3/VE/KQ/MY-1000228/craft-paper-plant-500x500.jpg",
      description: "Automatic slotting machine for creating precise folds and creases in corrugated boards."
    },
    {
      id: 5,
      name: "Stitching Machine",
      model: "SCM ST-200",
      capacity: "8,000 stitches/hour",
      features: [
        "Automatic wire feeding",
        "Adjustable stitch length",
        "Safety sensors",
        "Low maintenance"
      ],
      specifications: {
        "Stitch Type": "Double-loop",
        "Wire Gauge": "16-20 AWG",
        "Speed": "200 stitches/min",
        "Footprint": "2 x 1.5 meters"
      },
      image: "https://3.imimg.com/data3/VE/KQ/MY-1000228/craft-paper-plant-500x500.jpg",
      description: "Heavy-duty stitching machine for secure box assembly and reinforcement."
    },
    {
      id: 6,
      name: "Automatic Folder Gluer",
      model: "VIDEOJET FG-800",
      capacity: "6,000 boxes/hour",
      features: [
        "Hot melt gluing",
        "Multiple folding patterns",
        "Quality inspection",
        "Barcode verification"
      ],
      specifications: {
        "Max Speed": "800 m/min",
        "Glue Type": "Hot melt PVA",
        "Control": "PLC system",
        "Accuracy": "±0.5 mm"
      },
      image: "https://3.imimg.com/data3/VE/KQ/MY-1000228/craft-paper-plant-500x500.jpg",
      description: "Fully automatic folder gluer for high-speed box forming and sealing with precision glue application."
    }
  ]

  const productionProcess = [
    {
      step: 1,
      title: "Paper Unwinding",
      description: "Craft paper rolls are loaded and fed into the corrugation machine",
      machines: ["Roll Stand", "Pre-heaters"],
      image: "https://3.imimg.com/data3/VE/KQ/MY-1000228/craft-paper-plant-500x500.jpg"
    },
    {
      step: 2,
      title: "Corrugation",
      description: "Paper passes through heated fluted rolls to create the corrugated medium",
      machines: ["Corrugation Machine", "Steam System"],
      image: "https://3.imimg.com/data3/VE/KQ/MY-1000228/craft-paper-plant-500x500.jpg"
    },
    {
      step: 3,
      title: "Lamination",
      description: "Liner boards are glued to the corrugated medium to form rigid boards",
      machines: ["Glue Machine", "Double Backer"],
      image: "https://3.imimg.com/data3/VE/KQ/MY-1000228/craft-paper-plant-500x500.jpg"
    },
    {
      step: 4,
      title: "Printing & Cutting",
      description: "Boards are printed, scored, and cut into box blanks",
      machines: ["Flexo Printer", "Die-Cutter"],
      image: "https://3.imimg.com/data3/VE/KQ/MY-1000228/craft-paper-plant-500x500.jpg"
    },
    {
      step: 5,
      title: "Folding & Gluing",
      description: "Box blanks are folded and glued into finished boxes",
      machines: ["Folder Gluer", "Stitching Machine"],
      image: "https://3.imimg.com/data3/VE/KQ/MY-1000228/craft-paper-plant-500x500.jpg"
    },
    {
      step: 6,
      title: "Quality Check",
      description: "Finished boxes undergo rigorous quality inspection",
      machines: ["Inspection Tables", "Testing Equipment"],
      image: "https://3.imimg.com/data3/VE/KQ/MY-1000228/craft-paper-plant-500x500.jpg"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  }

  const itemVariants = {
    hidden: { y: 2, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <>
   
      <section className='relative w-full pt-[10rem]  pb-10 
  before:content-[""] before:absolute before:top-24 before:w-full before:h-full 
  before:bg-gradient-to-r before:from-indigo-200 before:via-white before:to-purple-200 
  before:rounded-full before:blur-3xl before:-z-10
  dark:before:from-indigo-900 dark:before:via-black dark:before:to-purple-900'>
        <div className="container">
          <motion.div 
            className='flex flex-col lg:flex-row items-start gap-12'
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className='flex-1 flex flex-col gap-8'>
              <motion.div variants={itemVariants}>
                <h1 className='text-4xl md:text-5xl font-medium text-gray-900 dark:text-white leading-tight mb-4'>
                  Advanced Machinery
                  <span className='text-indigo-600 dark:text-indigo-400 block'>
                    For Corrugated Box Production
                  </span>
                </h1>
                <p className='text-lg text-gray-600 dark:text-gray-400 leading-relaxed'>
                  State-of-the-art German and Japanese machinery transforming craft paper into 
                  high-quality corrugated boxes with precision, efficiency, and consistency.
                </p>
              </motion.div>

              <motion.div 
                className='grid grid-cols-3 gap-4'
                variants={itemVariants}
              >
                <div className='text-center p-4 border border-gray-200 dark:border-gray-700'>
                  <div className='text-2xl font-bold text-indigo-600 dark:text-indigo-400'>1Lakh+</div>
                  <div className='text-sm text-gray-600 dark:text-gray-400'>Boxes Daily</div>
                </div>
                <div className='text-center p-4 border border-gray-200 dark:border-gray-700'>
                  <div className='text-2xl font-bold text-indigo-600 dark:text-indigo-400'>99.2%</div>
                  <div className='text-sm text-gray-600 dark:text-gray-400'>Uptime</div>
                </div>
                <div className='text-center p-4 border border-gray-200 dark:border-gray-700'>
                  <div className='text-2xl font-bold text-indigo-600 dark:text-indigo-400'>ISO</div>
                  <div className='text-sm text-gray-600 dark:text-gray-400'>Certified</div>
                </div>
              </motion.div>

              <motion.div 
                className='flex flex-col sm:flex-row gap-4'
                variants={itemVariants}
              >
                <button 
                  onClick={() => navigate('/contact')}
                  className='px-8 py-4 bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors duration-200'
                >
                  Schedule Plant Visit
                </button>
                <button className='px-8 py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:border-indigo-600 hover:text-indigo-600 transition-all duration-200'>
                  Download Technical Specs
                </button>
              </motion.div>
            </div>

            <motion.div 
              className='flex-1'
              variants={itemVariants}
            >
              <div style={{ height: '24rem' }}>
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800"
                  alt="Corrugated Box Manufacturing Machinery"
                  className='w-full h-full object-cover'
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      <section className='py-16 '>
        <div className="container">
          <motion.div 
            className='flex flex-col gap-12'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className='text-center max-w-2xl mx-auto'
              variants={itemVariants}
            >
              <h2 className='text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-4'>
                Manufacturing Process
              </h2>
              <p className='text-gray-600 dark:text-gray-400'>
                From craft paper rolls to finished corrugated boxes - our 6-step automated process
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {productionProcess.map((process) => (
                <motion.div
                  key={process.step}
                  className='p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'
                  variants={itemVariants}
                >
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='w-12 h-12 bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center font-bold text-indigo-600 dark:text-indigo-400'>
                      {process.step}
                    </div>
                    <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>{process.title}</h3>
                  </div>
                  
                  <div style={{ height: '8rem' }} className='mb-4'>
                    <img 
                      src={process.image} 
                      alt={process.title}
                      className='w-full h-full object-cover'
                    />
                  </div>
                  
                  <p className='text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed'>
                    {process.description}
                  </p>
                  
                  <div>
                    <h4 className='font-medium text-gray-900 dark:text-white mb-2 text-sm'>Machines Used:</h4>
                    <div className='flex flex-wrap gap-2'>
                      {process.machines.map((machine, index) => (
                        <span key={index} className='text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1'>
                          {machine}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

     
      <section className='py-16'>
        <div className="container">
          <motion.div 
            className='flex flex-col gap-12'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className='text-center max-w-2xl mx-auto'
              variants={itemVariants}
            >
              <h2 className='text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-4'>
                Our Machinery Portfolio
              </h2>
              <p className='text-gray-600 dark:text-gray-400'>
                Advanced German and Japanese machines ensuring precision and quality in every box
              </p>
            </motion.div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {machineryData.map((machine) => (
                <motion.div
                  key={machine.id}
                  className='flex flex-col border border-gray-200 dark:border-gray-700'
                  variants={itemVariants}
                  whileHover={{ y: -0.5 }}
                >
                  <div className='flex-1 p-6 flex flex-col gap-6'>
                    <div className='flex items-start gap-6'>
                      <div style={{ width: '8rem', height: '8rem' }} className='flex-shrink-0'>
                        <img 
                          src={machine.image} 
                          alt={machine.name}
                          className='w-full h-full object-cover'
                        />
                      </div>
                      <div className='flex-1'>
                        <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-1'>{machine.name}</h3>
                        <div className='text-sm text-indigo-600 dark:text-indigo-400 mb-2'>{machine.model}</div>
                        <div className='text-sm text-gray-600 dark:text-gray-400 mb-4'>{machine.description}</div>
                        
                        <div className='grid grid-cols-2 gap-4 text-sm'>
                          <div>
                            <h4 className='font-medium text-gray-900 dark:text-white mb-2'>Capacity</h4>
                            <div className='text-gray-600 dark:text-gray-400'>{machine.capacity}</div>
                          </div>
                          <div>
                            <h4 className='font-medium text-gray-900 dark:text-white mb-2'>Key Features</h4>
                            <ul className='text-gray-600 dark:text-gray-400 space-y-1'>
                              {machine.features.slice(0, 2).map((feature, index) => (
                                <li key={index}>• {feature}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                      <div>
                        <h4 className='font-medium text-gray-900 dark:text-white mb-2'>Specifications</h4>
                        <ul className='text-sm text-gray-600 dark:text-gray-400 space-y-1'>
                          {Object.entries(machine.specifications).slice(0, 3).map(([key, value]) => (
                            <li key={key}>{key}: {value}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className='font-medium text-gray-900 dark:text-white mb-2'>Features</h4>
                        <ul className='text-sm text-gray-600 dark:text-gray-400 space-y-1'>
                          {machine.features.slice(2, 4).map((feature, index) => (
                            <li key={index}>• {feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

   
      <section className='py-16 '>
        <div className="container">
          <motion.div 
            className='flex flex-col gap-12'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className='text-center max-w-2xl mx-auto'
              variants={itemVariants}
            >
              <h2 className='text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-4'>
                Technical Capabilities
              </h2>
              <p className='text-gray-600 dark:text-gray-400'>
                Advanced manufacturing capabilities for diverse packaging requirements
              </p>
            </motion.div>

            <motion.div 
              className='grid grid-cols-2 md:grid-cols-4 gap-6'
              variants={itemVariants}
            >
              {[
                { parameter: "Max Board Width", value: "2.5m", unit: "meters" },
                { parameter: "Production Speed", value: "220", unit: "m/min" },
                { parameter: "Print Colors", value: "6", unit: "colors" },
                { parameter: "Box Types", value: "50+", unit: "designs" },
                { parameter: "Flute Types", value: "A,B,C,E,F", unit: "types" },
                { parameter: "Min Order Qty", value: "500", unit: "boxes" },
                { parameter: "Lead Time", value: "9", unit: "days" },
                { parameter: "Quality Check", value: "100%", unit: "inspection" }
              ].map((spec, index) => (
                <div key={index} className='text-center p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'>
                  <div className='text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2'>{spec.value}</div>
                  <div className='text-gray-900 dark:text-white font-medium mb-1'>{spec.parameter}</div>
                  <div className='text-sm text-gray-600 dark:text-gray-400'>{spec.unit}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

     
    </>
  )
}

export default Machinery