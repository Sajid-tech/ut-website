import { Link } from "react-router-dom";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import StarRating from "../../shared/star-rating";
import { avatarList } from "../../../data/pageData";

function HeroSection() {
  const ref = useRef(null);

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
    hidden: { y: 30, opacity: 0 },
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
    <section className="relative w-full  2xl:pb-20 pb-10 
          before:absolute before:top-24 before:w-full before:h-full 
          before:bg-gradient-to-r before:from-indigo-200 before:via-white before:to-purple-200 
          before:rounded-full before:blur-3xl before:-z-10
          dark:before:from-indigo-900 dark:before:via-black dark:before:to-purple-900">
      <div className="w-full pt-[8rem] pb-20">
        <div className="container">
          {/* Centered Layout */}
          <motion.div
            ref={ref}
            className="flex flex-col items-center text-center gap-16 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Content Stack */}
            <div className="flex flex-col gap-10 w-full">
              
              {/* Headline */}
              <motion.div variants={itemVariants} className="flex flex-col gap-6">
                <h1 className="text-5xl md:text-7xl font-medium text-gray-900 dark:text-white leading-tight">
                  Empowering Brands
                  <br />
                  <span className="text-indigo-600 dark:text-indigo-400">Elevating Communities</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  From brand strategy to event management, we help organizations grow with clarity, creativity, and technology.
                </p>
              </motion.div>

              {/* CTA & Rating Row */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-8">
                {/* Primary CTA */}
                <Link
                  to="/contact"
                  className="group flex items-center gap-4 py-4 px-8 bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors duration-200"
                >
                  <span>Start Your Project</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform duration-200 group-hover:translate-x-1"
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

                {/* Secondary CTA */}
                <Link
                  to="/about"
                  className="flex items-center gap-4 py-4 px-8 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200"
                >
                  Learn More
                </Link>
              </motion.div>

              {/* Rating & Trust */}
              <motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-3">
                  <StarRating count={4} color="#4F46E5" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">4.9/5 Rating</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Trusted by 300+ clients worldwide
                </p>
              </motion.div>
            </div>

            {/* Visual Elements Grid */}
            <motion.div variants={itemVariants} className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                
                {/* Left Image */}
                <div className="flex justify-center md:justify-start">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400"
                    alt="Strategy"
                    className="w-full max-w-xs h-64 object-cover"
                  />
                </div>

                {/* Center Image - Main Focus */}
                <div className="flex justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500"
                    alt="Digital Innovation"
                    className="w-full max-w-sm h-64 object-cover"
                  />
                </div>

                {/* Right Image */}
                <div className="flex justify-center md:justify-end">
                  <img
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400"
                    alt="Technology"
                    className="w-full max-w-xs h-64 object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* Feature Highlights */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" 
                      stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className=" text-[2.5rem] font-semibold text-gray-900 dark:text-white">Strategy First Results</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Data-driven approaches for measurable results</p>
              </div>

              <div className="flex flex-col items-center gap-3 text-center">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M13 10V3L4 14H11V21L20 10H13Z" 
                      stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="  text-[2.5rem] font-semibold text-gray-900 dark:text-white">Creative Technology</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Innovative solutions that drive engagement</p>
              </div>

              <div className="flex flex-col items-center gap-3 text-center">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7ZM3 20C3 16.6863 5.68629 14 9 14C12.3137 14 15 16.6863 15 20V21H3V20Z" 
                      stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className=" text-[2.5rem] font-semibold text-gray-900 dark:text-white">Community Focused</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Building lasting relationships and networks</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
