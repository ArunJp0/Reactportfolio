import React from 'react'
import { Element } from 'react-scroll'
import './SkillContainer.css'
import Skillsset from '../assets/Skillsset.jpg'  
import { LinearProgress } from '@material-ui/core/'

const SkillContainer = () => {
  return (
    <Element className='skillContainer' id='skills'>
        <div className='skills'>
        <div className='skillContainer_image'>
               <img src={Skillsset} alt="skill_img" />
        </div>
        
        <div className='skillContainer_text'>
            <h2>SKILLSET</h2>
            <div className='SkillContainer_skillSet'>
                <h5>HTML</h5>
                <div className='SkillContainer_slider SkillContainer_slider1'>
                    <LinearProgress variant='determinate' value={90} />
                </div>
            </div>
            <div className='SkillContainer_skillSet'>
                <h5>CSS</h5>
                <div className='SkillContainer_slider SkillContainer_slider2'>
                    <LinearProgress variant='determinate' value={85} />
                </div>
            </div>
            <div className='SkillContainer_skillSet'>
                <h5>JavaScript</h5>
                <div className='SkillContainer_slider SkillContainer_slider3'>
                    <LinearProgress variant='determinate' value={80} />
                </div>
            </div>
            <div className='SkillContainer_skillSet'>
                <h5>ReactJS</h5>
                <div className='SkillContainer_slider SkillContainer_slider4'>
                    <LinearProgress variant='determinate' value={75} />
                </div>
            </div>
            <div className='SkillContainer_skillSet'>
                <h5>NodeJS</h5>
                <div className='SkillContainer_slider SkillContainer_slider5'>
                    <LinearProgress variant='determinate' value={75} />
                </div>
            </div>
            <div className='SkillContainer_skillSet'>
                <h5>MongoDB</h5>
                <div className='SkillContainer_slider SkillContainer_slider6'>
                    <LinearProgress variant='determinate' value={80} />
                </div>
            </div>
        </div>
        </div>
    </Element>
  )
}

export default SkillContainer