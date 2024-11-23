 import Achievements from '@/components/Achievements'
import Course from '@/components/Course'
import Curses from '@/components/Curses'
import Customer from '@/components/Customer'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Logos from '@/components/Logos'
import Our_team from '@/components/Our_team'
import Top from '@/components/top'

import React from 'react'

const Home = () => {
  return (
    <div className='font-myfont'>
      <Top />
      <Header />
      <Hero />
      <Logos />
      <Course />
      <Achievements />
      <Curses />
    <Our_team/>
    <Customer  />
    <Footer />
    </div>
  )
}

export default Home
