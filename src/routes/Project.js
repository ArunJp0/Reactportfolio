import React from 'react'
import Navbar from '../components/Navbar.js'
import Heroimg2 from '../components/Heroimg2'
import Footer from '../components/Footer.js'
import Work from '../components/Work.js'
import Pricing from '../components/Pricing.js'

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS." text="Some of my most recent works" />
      <Work />
      <Pricing />
      <Footer />
    </div>
  )
}

export default Project