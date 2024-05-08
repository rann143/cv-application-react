/* eslint-disable no-unused-vars */
import { ContactForm, EduForm, WorkForm } from "./Form";
import Button from "./Button";
import { useState } from "react";
import '../styles/display.css'
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line react/prop-types
function ContactDisplay({ isActive, onShow, name, email, cell, linkedIn }) {
  
    return (
        <div className={isActive ? 'contact-display' : 'hidden'} >
            <h1>{name}</h1>
            <h3>{email}</h3>
            <div> 
                <span>{cell}</span> <strong>||</strong>  <span>{linkedIn}</span>
            </div>
            <Button className='edit-btn' title='Edit' type='button' onClick={onShow} />
        </div>
    )
    
}

// eslint-disable-next-line react/prop-types
function EduDisplay({isActive, onShow, school, degree, gradDate, bullets = [] }) {

    const filteredBullets = bullets.filter(bullet => bullet.value !== '' )

    return (
        <div className={isActive ? 'edu-display' : 'hidden'}>
            
            <div className='title-date-line'>
                <p className='school-name' >{school}</p>
                <div className="date"><time>{gradDate}</time></div>
            </div>
            <span><i>{degree}</i></span>
            
            <ul>
                {
                    filteredBullets.length > 0 &&
                    filteredBullets.map(bullet => {
                        return <li key={uuidv4()}>{bullet.value}</li>
                    })
                }
            </ul>
            <Button className='edit-btn' title='Edit' type='button' onClick={onShow} />
        </div>
    )
    
}

// eslint-disable-next-line react/prop-types
function WorkDisplay({ isActive, onShow, company, position, dateStart, dateEnd, bullets= [] }) {

    const filteredBullets = bullets.filter(bullet => bullet.value !== '' )

    return (
        <div className={isActive ? 'work-display' : "hidden"}>
            
            <div className='title-date-line'>
                <p className='company-name'>{company}</p><div className="date"><time>{dateStart}</time> - <time>{dateEnd}</time></div>
            </div>
            <span>{position}</span>

            <ul>
                {
                    filteredBullets.length > 0 &&
                    filteredBullets.map(bullet => {
                        return <li key={uuidv4()}>{bullet.value}</li>
                    })
                }
            </ul>
           
            <Button className='edit-btn' title='Edit' type='button' onClick={onShow} />
        </div>
    )
    
}

export {ContactDisplay, EduDisplay, WorkDisplay}