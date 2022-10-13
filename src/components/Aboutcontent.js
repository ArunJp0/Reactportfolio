import './Aboutcontent.css'
import React from 'react'
import { Link } from 'react-router-dom'
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.webp"

const Aboutcontent = () => {
  return (
    <div className='about'>
       <div className='left'>
        <h1>Who Am I?</h1>
        <p>Im a Front-End Developer. I create responsive secure websites for my clients.</p>
        <Link to="/contact"><button className='btn'>Contact</button></Link>
       </div>
       
       <div className='right'>
        <div className='image-container'>
            <div className='image-stack top'>
                <img src={React1} className="img" alt="about-image" />
            </div>
            <div className='image-stack bottom'>
                <img src={React2} className="img" alt="about-image" />
            </div>
        </div>
       </div>
    </div>
  )
}

export default Aboutcontent