import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Heroimg2 from '../components/Heroimg2.js'
import Aboutcontent from '../components/Aboutcontent.js'
import Typewriter from 'typewriter-effect';



const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="ABOUT." text={ <Typewriter
            options={{
               autoStart: true,
               loop: true,
               delay: 40,
               strings: [
                "Im a friendly Web Developer.",
               ],
            }}
             /> } 
             
             />
             
      <Aboutcontent />
      <Footer />
    </div>
  )
}

export default About