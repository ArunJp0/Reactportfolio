import React from 'react'
import Navbar from '../components/Navbar.js'
import Footer from '../components/Footer.js'
import Heroimg2 from '../components/Heroimg2.js'
import Form from '../components/Form.js'
import Typewriter from 'typewriter-effect';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="CONTACT." text={ <Typewriter
            options={{
               autoStart: true,
               loop: true,
               delay: 40,
               strings: [
                "Lets have a chat.",
               ],
            }}
             /> } />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact