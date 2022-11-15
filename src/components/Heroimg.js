import './Heroimg.css';
import React from 'react';
import IntroImg from '../assets/intro-bg.jpg';
import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';


const heroimg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src={IntroImg} alt='intro-img' />
        </div>
        <div className='content'>
            <p>HI, IM A FREELANCECR.</p>
            <div className='typecontent'>
            <Typewriter
            options={{
               autoStart: true,
               loop: true,
               delay: 40,
               strings: [
                "I'm a Web Developer 💻.",
                "I'm a FreeLancer 🌐.",
               ],
            }}
            />
            </div>
           
            <div>
                <Link to="/project" className='btn'>Projects</Link>
                <Link to="/contact" className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default heroimg