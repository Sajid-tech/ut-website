import { useEffect } from 'react'

import CustomerStories from '../components/home/customer-stories'

import HeroSection from '../components/home/hero'
import Innovation from '../components/home/innovation'
import OnlinePresence from '../components/home/online-presence'
import Solutions from '../components/home/solution'

import WebResult from '../components/home/web-result'
import SlideComponent from '@/components/ui/slideshow'



const Home = () => {
  useEffect(() => {
    document.title = 'Home | THE UNITED TRADERS (Regd.)'
  }, [])

  return (
    <>
      <SlideComponent />
      <HeroSection />

     <WebResult />
     <Innovation />
      <OnlinePresence />
     
     <CustomerStories />

       <Solutions />
    </>
  )
}

export default Home