import './Footer.css';
import React from 'react';
import {FaHome,FaPhone,FaMailBulk,FaFacebook,FaTwitter,FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
              <div className='location'>
                 
                 <div>
                 <h4><FaHome size={20} style={{color:"#fff", marginRight:"2rem" }} />24, Anna Nagar, Chennai.</h4>
                  </div>
                 <div className='phone'>
                    <h4><FaPhone size={20} style={{color:"#fff", marginRight:"2rem" }} />+91 83822 08788</h4>
                 </div>
                 <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem" }} />info@gmail.com</h4>
                 </div>
              </div>
            </div>

            <div className='right'>
                <h4>About the Company</h4>
                <p>This is me ArunJp. I'm a Freelance Web Developer. I enjoy discussing new projects and design challenges.</p>
                <div className='social'>
                <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem" }} />
                <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem" }} />
                <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem" }} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer