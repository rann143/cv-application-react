/* eslint-disable no-unused-vars */
import { ContactForm, EduForm, WorkForm } from "./Form";
import Button from "./Button";
import BulletList from "./BulletPoint";
import { useState } from "react";
import '../styles/display.css'
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line react/prop-types
function ContactDisplay({ className, name, email, cell }) {
    const [isEditing, setIsEditing] = useState(false)

    function handleEdit(e) {
        e.preventDefault();
        setIsEditing(true);
    }

    if (isEditing) {
        return (
            <ContactForm
                name={name}
                email={email}
                cell={cell}
            />
        )
    }

    return (
        <div className={className} >
            <h1>{name}</h1>
            <h3>{email}</h3>
            <h3>{cell}</h3>
            <Button className='edit-btn' title='Edit' type='button' onClick={handleEdit} />
        </div>
    )
    
}

// eslint-disable-next-line react/prop-types
function EduDisplay({isActive, onShow, school, degree, gradDate, bullets = [] }) {

    const filteredBullets = bullets.filter(bullet => bullet.value !== '' )

    return (
        <div className={isActive ? 'edu-display' : 'hidden'}>
            <h2>EDUCATION</h2>
            <div className='title-date-line'>
                <p className='school-name' >{school}</p>
                <div className="date"><time>{gradDate}</time></div>
            </div>
            <span>{degree}</span>
            
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
function WorkDisplay({ className, company, position, dateStart, dateEnd, details }) {
    const [isEditing, setIsEditing] = useState(false)

    function handleEdit(e) {
        e.preventDefault();
        setIsEditing(true);
    }

    if (isEditing) {
        return (
            <WorkForm
                company={company}
                position={position}
                dateStart={dateStart}
                dateEnd={dateEnd}
                details={details}
            />
        )
    }

    

    return (
        <div className={className}>
            <h2>EXPERIENCE</h2>
            <div className='title-date-line'>
                <p className='company-name'>{company}</p><div className="date"><time>{dateStart}</time> - <time>{dateEnd}</time></div>
            </div>
            <span>{position}</span>
            <ul>
                <li> {details} </li>
            </ul>
            <Button className='edit-btn' title='Edit' type='button' onClick={handleEdit} />
        </div>
    )
    
}

export {ContactDisplay, EduDisplay, WorkDisplay}