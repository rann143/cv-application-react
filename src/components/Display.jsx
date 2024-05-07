/* eslint-disable no-unused-vars */
import { ContactForm, EduForm, WorkForm } from "./Form";
import Button from "./Button";
import { useState } from "react";
import '../styles/display.css'

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
function EduDisplay({ className, school, degree, gradDate, additionalInfo }) {
    const [isEditing, setIsEditing] = useState(false)

    function handleEdit(e) {
        e.preventDefault();
        setIsEditing(true);
    }

    if (isEditing) {
        return (
            <EduForm
                school={school}
                degree={degree}
                gradDate={gradDate}
                additionalInfo={additionalInfo}
            />
        )
    }

    return (
        <div className={className}>
            <h2>EDUCATION</h2>
            <div className='title-date-line'>
                <p className='school-name' >{school}</p>
                <div className="date"><time>{gradDate}</time></div>
            </div>
            <span>{degree}</span>
            
            <div>{additionalInfo}</div>
            <Button className='edit-btn' title='Edit' type='button' onClick={handleEdit} />
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
            <div>{details}</div>
            <Button className='edit-btn' title='Edit' type='button' onClick={handleEdit} />
        </div>
    )
    
}

export {ContactDisplay, EduDisplay, WorkDisplay}