import './Workcard.css';
import React from 'react'

const Workcard = (props) => {
  return (
    <div className='project-card'>
                <img src = {props.imgsrc} alt='work-image' />
                <h2 className='project-title'>{props.title}</h2>
                <div className='pro-details'>
                    <p>{props.text}</p>
                    <div className='pro-btns'>
                        <a href={props.view} className="btn">View</a>
                        
                    </div>
                </div>
            </div>
  )
}

export default Workcard