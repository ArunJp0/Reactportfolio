import React from 'react'
import Navbar from '../components/Navbar.js'
import Heroimg from '../components/Heroimg.js'
import Footer from '../components/Footer.js'
import Work from '../components/Work.js'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Heroimg />
        <Work />
        <Footer />
    </div>
  )
}

export default Home