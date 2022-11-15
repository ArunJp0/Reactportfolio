import React from 'react'
import './Footer.css'
import { Element } from 'react-scroll'
import { IconButton } from '@material-ui/core'
 
import { GitHub, Instagram, LinkedIn } from '@material-ui/icons'

const Contact = () => {
  return (
    
    <Element className='contact' id='contact'>
           <h1>Contact</h1>
        <div className='contact_container'>
        
            <p>Email : <span>prasathjp95@gmail.com</span></p>
            <p>Github Username : <span>https://github.com/ArunJp0/</span></p>
            <div className='contact_icons'>
                <a href='https://instagram.com/_arunjp0?igshid=YmMyMTA2M2Y='>
                <IconButton>
                    <Instagram />
                </IconButton>
                </a>
                <a href='https://www.linkedin.com/in/arun-jp-174587a9/'>
                <IconButton>
                    <LinkedIn />
                </IconButton>
                </a>
                <a href='https://github.com/ArunJp0/'>
                <IconButton>
                    <GitHub />
                </IconButton>
                </a>
            </div>
        </div>
        </Element>
  )
}

export default Contact