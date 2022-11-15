import React from 'react'
import Navbar from '../components/Navbar.js'
import Heroimg2 from '../components/Heroimg2'
import Footer from '../components/Footer.js'
import Work from '../components/Work.js'
import Pricing from '../components/Pricing.js'
import Typewriter from 'typewriter-effect';

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS." text={ <Typewriter
            options={{
               autoStart: true,
               loop: true,
               delay: 40,
               strings: [
                "Some of my most recent works",
               ],
            }}
             /> } />
      <Work />
      <Pricing />
      <Footer />
    </div>
  )
}

export default Project