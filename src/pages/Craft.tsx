import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Craft = () => {
  const navigate = useNavigate();

  const paperTypes = [
    {
      id: 1,
      name: "Virgin Kraft Paper",
      gsm: "80-350 GSM",
      features: ["High tensile strength", "Excellent tear resistance", "Superior surface smoothness", "100% biodegradable"],
      applications: ["Premium packaging", "Shopping bags", "Wrapping paper", "Multi-wall sacks"],
      advantages: ["Eco-friendly", "High durability", "Good printability", "Moisture resistant"],
      image: "https://images.unsplash.com/photo-1700004060514-7aec5a9f7f73?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
    },
    {
      id: 2,
      name: "Test Liner Paper",
      gsm: "125-300 GSM",
      features: ["Consistent quality", "Good formation", "Excellent runnability", "Cost-effective"],
      applications: ["Corrugated boxes", "Carton manufacturing", "Industrial packaging", "Export packaging"],
      advantages: ["Uniform thickness", "Smooth surface", "High stiffness", "Recyclable"],
      image: "https://images.unsplash.com/photo-1700004060514-7aec5a9f7f73?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
    },
    {
      id: 3,
      name: "Fluting Medium",
      gsm: "90-180 GSM",
      features: ["Excellent corrugating properties", "Good compression strength", "Thermal insulation", "Shock absorption"],
      applications: ["Cushioning material", "Box partitions", "Protective packaging", "Temperature sensitive goods"],
      advantages: ["Lightweight", "High resilience", "Customizable flute sizes", "Sustainable"],
      image: "https://images.unsplash.com/photo-1700004060514-7aec5a9f7f73?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
    },
    {
      id: 4,
      name: "Recycled Craft Paper",
      gsm: "70-400 GSM",
      features: ["Environmentally friendly", "Cost-effective", "Good strength properties", "Versatile applications"],
      applications: ["Eco-friendly packaging", "Paper tubes", "Cores", "Wrapping materials"],
      advantages: ["Reduced carbon footprint", "Budget-friendly", "Customizable", "Widely available"],
      image: "https://images.unsplash.com/photo-1700004060514-7aec5a9f7f73?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
    }
  ];

  const manufacturingProcess = [
    {
      step: 1,
      title: "Raw Material Sourcing",
      description: "We source high-quality wood pulp and recycled paper from certified sustainable forests and suppliers",
      details: ["Sustainable forestry practices", "Quality testing of raw materials", "Environmental compliance checks"],
      icon: "🌳"
    },
    {
      step: 2,
      title: "Pulping & Refining",
      description: "Transforming raw materials into pulp through mechanical and chemical processes",
      details: ["Fiber separation", "Cleaning and screening", "Refining for strength"],
      icon: "⚙️"
    },
    {
      step: 3,
      title: "Paper Formation",
      description: "Creating paper sheets through advanced Fourdrinier machines and cylinder moulds",
      details: ["Sheet formation", "Water removal", "Fiber orientation control"],
      icon: "📄"
    },
    {
      step: 4,
      title: "Pressing & Drying",
      description: "Removing excess water and drying paper to achieve desired moisture content",
      details: ["Mechanical pressing", "Steam heated drying", "Moisture profiling"],
      icon: "🔥"
    },
    {
      step: 5,
      title: "Calendering & Finishing",
      description: "Enhancing surface properties and applying special treatments",
      details: ["Surface smoothing", "GSM calibration", "Special coatings"],
      icon: "✨"
    },
    {
      step: 6,
      title: "Quality Control",
      description: "Rigorous testing and inspection to ensure international standards",
      details: ["Tensile strength test", "Tear resistance check", "GSM verification"],
      icon: "🔍"
    }
  ];

  const technicalSpecifications = [
    { parameter: "Basis Weight Range", value: "70-400", unit: "GSM" },
    { parameter: "Tensile Strength", value: "4.5-12.0", unit: "KN/m" },
    { parameter: "Burst Strength", value: "200-600", unit: "KPa" },
    { parameter: "Tear Strength", value: "500-1200", unit: "mN" },
    { parameter: "Moisture Content", value: "6-8", unit: "%" },
    { parameter: "Ph Level", value: "6.5-7.5", unit: "pH" },
    { parameter: "Brightness", value: "20-80", unit: "% ISO" },
    { parameter: "Opacity", value: "85-98", unit: "%" }
  ];

  const applications = [
    {
      category: "Packaging",
      items: ["Corrugated Boxes", "Shipping Containers", "Retail Packaging", "Food Packaging", "Pharmaceutical Packaging"]
    },
    {
      category: "Industrial",
      items: ["Cores & Tubes", "Partitioning", "Cushioning Material", "Void Fill", "Wrapping Material"]
    },
    {
      category: "Commercial",
      items: ["Shopping Bags", "Carry Bags", "Gift Wrapping", "Book Covering", "Stationery Products"]
    },
    {
      category: "Specialized",
      items: ["Water-resistant Packaging", "Grease-proof Paper", "Anti-static Paper", "Flame-retardant Paper"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

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
  };

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
                  Premium Craft Paper
                  <span className='text-indigo-600 dark:text-indigo-400 block'>
                    Manufacturing Excellence
                  </span>
                </h1>
                <p className='text-lg text-gray-600 dark:text-gray-400 leading-relaxed'>
                  India's leading manufacturer of high-quality craft paper for corrugated boxes, 
                  offering sustainable, durable, and cost-effective packaging solutions since 2002.
                </p>
              </motion.div>

              <motion.div 
                className='grid grid-cols-3 gap-4' 
                variants={itemVariants}
              >
                <div className='text-center p-4 border border-gray-200 dark:border-gray-700'>
                  <div className='text-2xl font-bold text-indigo-600 dark:text-indigo-400'>100,000+</div>
                  <div className='text-sm text-gray-600 dark:text-gray-400'>Boxes Daily</div>
                </div>
                <div className='text-center p-4 border border-gray-200 dark:border-gray-700'>
                  <div className='text-2xl font-bold text-indigo-600 dark:text-indigo-400'>400+</div>
                  <div className='text-sm text-gray-600 dark:text-gray-400'>Cities Served</div>
                </div>
                <div className='text-center p-4 border border-gray-200 dark:border-gray-700'>
                  <div className='text-2xl font-bold text-indigo-600 dark:text-indigo-400'>20+</div>
                  <div className='text-sm text-gray-600 dark:text-gray-400'>Years Experience</div>
                </div>
              </motion.div>

              <motion.div 
                className='flex flex-col sm:flex-row gap-4'
                variants={itemVariants}
              >
                <button 
                  onClick={() => navigate('/quote')}
                  className='px-8 py-4 bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors duration-200'
                >
                  Get Custom Quote
                </button>
                <button className='px-8 py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:border-indigo-600 hover:text-indigo-600 transition-all duration-200'>
                  Download Brochure
                </button>
              </motion.div>
            </div>

            <motion.div 
              className='flex-1'
              variants={itemVariants}
            >
              <div style={{ height: '24rem' }}> 
                <img 
                  src="https://www.packman.co.in/media/wysiwyg/corrugated_boxes_manufacturer_supplier.webp" 
                  alt="Craft Paper Manufacturing Process"
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
            className='flex flex-col lg:flex-row gap-12'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className='flex-1'>
              <motion.h2 
                className='text-3xl md:text-4xl font-medium text-gray-900 dark:text-white mb-8'
                variants={itemVariants}
              >
                India's Premier Craft Paper Manufacturer
              </motion.h2>
              
              <motion.div className='space-y-6' variants={itemVariants}>
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                  Founded in 2002 by <strong>Gaurav Jalan</strong>, Packman Packaging has emerged as India's 
                  foremost manufacturer and supplier of custom-printed corrugated boxes, tamper-proof courier bags, 
                  and packaging tapes.
                </p>
                
                <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                  Our state-of-the-art ISO 9002 certified manufacturing facilities in Delhi NCR are equipped with 
                  fully automated production lines capable of manufacturing over <strong>1 lakh corrugated boxes daily</strong>. 
                  We serve more than <strong>400 cities across India</strong> with delivery within 9 working days.
                </p>
              </motion.div>

              <motion.div 
                className='grid grid-cols-2 gap-4 mt-8'
                variants={itemVariants}
              >
                <div className='text-center p-4 border border-gray-200 dark:border-gray-700'>
                  <div className='text-lg font-bold text-indigo-600 dark:text-indigo-400'>ISO 9002</div>
                  <div className='text-sm text-gray-600 dark:text-gray-400'>Certified</div>
                </div>
                <div className='text-center p-4 border border-gray-200 dark:border-gray-700'>
                  <div className='text-lg font-bold text-indigo-600 dark:text-indigo-400'>Eco</div>
                  <div className='text-sm text-gray-600 dark:text-gray-400'>Friendly</div>
                </div>
                <div className='text-center p-4 border border-gray-200 dark:border-gray-700'>
                  <div className='text-lg font-bold text-indigo-600 dark:text-indigo-400'>PAN</div>
                  <div className='text-sm text-gray-600 dark:text-gray-400'>India Delivery</div>
                </div>
                <div className='text-center p-4 border border-gray-200 dark:border-gray-700'>
                  <div className='text-lg font-bold text-indigo-600 dark:text-indigo-400'>24/7</div>
                  <div className='text-sm text-gray-600 dark:text-gray-400'>Support</div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className='flex-1'
              variants={itemVariants}
            >
              <div className='grid gap-6'>
                <div style={{ height: '16rem' }}>
                  <img 
                    src="https://www.packman.co.in/media/wysiwyg/packman-custom-packaging.webp" 
                    alt="Packman Packaging Facility"
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='grid grid-cols-2 gap-6'>
                  <div style={{ height: '12rem' }}>
                    <img 
                      src="https://www.packman.co.in/media/wysiwyg/packman-custom-packaging.webp" 
                      alt="Manufacturing Unit"
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div style={{ height: '12rem' }}>
                    <img 
                      src="https://www.packman.co.in/media/wysiwyg/packman-custom-packaging.webp" 
                      alt="Quality Control"
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>
              </div>
            </motion.div>
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
                Comprehensive Craft Paper Range
              </h2>
              <p className='text-gray-600 dark:text-gray-400'>
                Explore our diverse portfolio of craft papers, each engineered for specific applications 
                and performance requirements
              </p>
            </motion.div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {paperTypes.map((paper) => (
                <motion.div
                  key={paper.id}
                  className='flex flex-col border border-gray-200 dark:border-gray-700'
                  variants={itemVariants}
                  whileHover={{ y: -0.5 }} 
                >
                  <div className='flex-1 p-6 flex flex-col gap-6'>
                    <div className='flex items-start gap-6'>
                      <div style={{ width: '8rem', height: '8rem' }} className='flex-shrink-0'>
                        <img 
                          src={paper.image} 
                          alt={paper.name}
                          className='w-full h-full object-cover'
                        />
                      </div>
                      <div className='flex-1'>
                        <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>{paper.name}</h3>
                        <div className='text-sm text-indigo-600 dark:text-indigo-400 mb-4'>{paper.gsm}</div>
                        
                        <div className='grid grid-cols-1 gap-4'>
                          <div>
                            <h4 className='font-medium text-gray-900 dark:text-white mb-2'>Key Features</h4>
                            <div className='flex flex-wrap gap-2'>
                              {paper.features.map((feature, index) => (
                                <span key={index} className='text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1'>
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                      <div>
                        <h4 className='font-medium text-gray-900 dark:text-white mb-2'>Applications</h4>
                        <ul className='text-sm text-gray-600 dark:text-gray-400 space-y-1'>
                          {paper.applications.slice(0, 3).map((app, index) => (
                            <li key={index}>• {app}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className='font-medium text-gray-900 dark:text-white mb-2'>Advantages</h4>
                        <ul className='text-sm text-gray-600 dark:text-gray-400 space-y-1'>
                          {paper.advantages.slice(0, 3).map((adv, index) => (
                            <li key={index}>• {adv}</li>
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
                Technical Specifications
              </h2>
              <p className='text-gray-600 dark:text-gray-400'>
                Our craft papers meet international quality standards with precise technical parameters
              </p>
            </motion.div>

            <motion.div 
              className='grid grid-cols-2 md:grid-cols-4 gap-6'
              variants={itemVariants}
            >
              {technicalSpecifications.map((spec, index) => (
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
                Manufacturing Process
              </h2>
              <p className='text-gray-600 dark:text-gray-400'>
                From sustainable sourcing to precision manufacturing - our 6-step process ensures superior quality
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {manufacturingProcess.map((process) => (
                <motion.div
                  key={process.step}
                  className='p-6 border border-gray-200 dark:border-gray-700'
                  variants={itemVariants}
                >
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='w-12 h-12 bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center font-bold text-indigo-600 dark:text-indigo-400'>
                      {process.step}
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>{process.title}</h3>
                      <div className='text-2xl'>{process.icon}</div>
                    </div>
                  </div>
                  
                  <p className='text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed'>
                    {process.description}
                  </p>
                  
                  <ul className='space-y-2 text-sm text-gray-600 dark:text-gray-400'>
                    {process.details.map((detail, index) => (
                      <li key={index} className='flex items-start gap-2'>
                        <span className='text-indigo-500 mt-1'>•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
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
                Applications
              </h2>
              <p className='text-gray-600 dark:text-gray-400'>
                Our craft papers serve multiple industries with customized solutions for every need
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {applications.map((app, index) => (
                <motion.div
                  key={index}
                  className='p-6 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'
                  variants={itemVariants}
                >
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-4'>{app.category}</h3>
                  <ul className='space-y-2'>
                    {app.items.map((item, itemIndex) => (
                      <li key={itemIndex} className='text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2'>
                        <span className='w-1 h-1 bg-indigo-500 rounded-full flex-shrink-0'></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      <section className='py-16 bg-indigo-900'>
        <div className="container">
          <motion.div 
            className='text-center max-w-2xl mx-auto'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className='text-3xl md:text-4xl font-medium text-white mb-4'
              variants={itemVariants}
            >
              Ready to Elevate Your Packaging?
            </motion.h2>
            <motion.p 
              className='text-indigo-100 mb-8'
              variants={itemVariants}
            >
              Join industry leaders who trust Packman for their craft paper packaging needs
            </motion.p>
            
            <motion.div 
              className='flex flex-col sm:flex-row gap-4 justify-center'
              variants={itemVariants}
            >
              <button 
                onClick={() => navigate('/quote')}
                className='px-8 py-4 bg-white text-indigo-600 font-medium hover:bg-gray-100 transition-colors duration-200'
              >
                Get Instant Quote
              </button>
              <button className='px-8 py-4 border border-white text-white font-medium hover:bg-white/10 transition-all duration-200'>
                Schedule Consultation
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    

     
    </>
  );
};

export default Craft;