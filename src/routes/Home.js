import React from 'react'
import Navbar from '../components/Navbar.js'
import Heroimg from '../components/Heroimg.js'
import Footer from '../components/Footer.js'
import Work from '../components/Work.js'
import SkillContainer from '../components/SkillContainer.js'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Heroimg />
        <SkillContainer />
        <Work />
        
        <Footer />
    </div>
  )
}

export default Home