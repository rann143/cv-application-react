/* eslint-disable no-unused-vars */
import {Input, ParagraphInput} from './Input'
import { ContactDisplay, EduDisplay, WorkDisplay } from './Display';
import Button from './Button';
import '../styles/forms.css';
import { useState } from 'react';
import BulletWrapper from './PracticeForms';


// eslint-disable-next-line react/prop-types
function ContactForm({name, email, cell}) {
    const [isSent, setIsSent] = useState(false);
    const [info, setInfo] = useState({ myName: name, myEmail: email, myCell: cell})
    
    
    function handleNameTyping(e) {
        setInfo({...info, myName: e.target.value})
    }
    function handleEmailTyping(e) {
        setInfo({...info, myEmail: e.target.value})
    }
    function handleCellTyping(e) {
        setInfo({...info, myCell: e.target.value})
    }


    function handleSubmit(e) {
        e.preventDefault();

        if (!info.myName) {
            return alert('Please Enter your Name')
        }

        setIsSent(true);
    }

    if (isSent) {

        return (
            <ContactDisplay
                className='contact-display'
                name={info.myName}
                email={info.myEmail}
                cell={info.myCell}
            />
        )
    }


    return (
        <form className='contact-form' onSubmit={handleSubmit}>
            <Input className='contact-input' label='Name' name='name' placeholder='Sandy' type='text' text={info.myName} onTyping={handleNameTyping} />
            <Input className='contact-input' label='Email' name='email' placeholder='Sandy3@gmail.com' type='email' text={info.myEmail} onTyping={handleEmailTyping} />
            <Input className='contact-input' label='Cell' name='cell' placeholder='555-555-5566' type='tel' text={info.myCell} onTyping={handleCellTyping} />
            <Button className='form-submit' type='submit' title="Submit" />
        </form>
    )
}

// eslint-disable-next-line react/prop-types
function EduForm({isActive, onShow, onAddBullet, onRemoveBullet, onBulletTyping, onSchoolTyping, onDegreeTyping, onGradDateTyping, school, degree, gradDate, bullets = [] }) {
    

    return (
        <form className={isActive ? 'edu-form' : 'hidden'}>
            <h2>Education:</h2>
            <Input className='edu-input' label='School' name='school' placeholder='Tulane' type='text' text={school} onTyping={onSchoolTyping} />
            <Input className='edu-input' label='Degree' name='degree' placeholder='B.S Computer Science' type='text' text={degree} onTyping={onDegreeTyping} />
            <Input className='edu-input' label='Grad. Date' name='graduation-date' placeholder='Month Year' type='text' text={gradDate} onTyping={onGradDateTyping} />
            <div>
                {
                bullets.map((bullet, index) => {
                    return (
                        <>
                        <ParagraphInput key={index} placeholder="Add Bullet" text={bullet.value} onTyping={(e) => onBulletTyping(index, e)} />
                        <Button type='button' title='Delete' onClick={() => onRemoveBullet(index)}/>
                        </>
                    )
                })
                
                }
                <Button type='button' title="Add Detail" onClick={onAddBullet}/>
            </div>
            <Button className='form-submit' type='submit' title="Submit" onClick={onShow}/>
        </form>
    )

}

// eslint-disable-next-line react/prop-types
function WorkForm({ company, position, dateStart, dateEnd, details }) {
    const [isSent, setIsSent] = useState(false);
    const [workInfo, setWorkInfo] = useState({
        myCompany: company,
        myPosition: position,
        myDateStart: dateStart,
        myDateEnd: dateEnd,
        myDetails: details
    });

    function handleCompanyTyping(e) {
        setWorkInfo({...workInfo, myCompany: e.target.value})
    }

    function handlePositionTyping(e) {
        setWorkInfo({...workInfo, myPosition: e.target.value})
    }

    function handleStartTyping(e) {
        setWorkInfo({...workInfo, myDateStart: e.target.value})
    }

    function handleEndTyping(e) {
        setWorkInfo({...workInfo, myDateEnd: e.target.value})
    }
    function handleDetailsTyping(e) {
        setWorkInfo({...workInfo, myDetails: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsSent(true);
    }


    if (isSent) {

        return (
            <WorkDisplay
                className='work-display'
                company={workInfo.myCompany}
                position={workInfo.myPosition}
                dateStart={workInfo.myDateStart}
                dateEnd={workInfo.myDateEnd}
                details={workInfo.myDetails}
            />
        )
    }

    return (
        <div className='work-container'>
        <form className='work-form' onSubmit={handleSubmit}>
            <Input className='work-input' label='Company' name='school' placeholder='Name' type='text' text={workInfo.myCompany} onTyping={handleCompanyTyping} />
            <Input className='work-input' label='Position' name='degree' placeholder='Title' type='text' text={workInfo.myPosition} onTyping={handlePositionTyping} />
            <Input className='work-input' label='Start Date' name='start-date' placeholder='Month Year' type='text' text={workInfo.myDateStart} onTyping={handleStartTyping} />
            <Input className='work-input' label='End Date' name='end-date' placeholder='Month Year' type='text' text={workInfo.myDateEnd} onTyping={handleEndTyping} />
            <ParagraphInput label='Bulletpoint' placeholder='detail about your accomplishments' text={workInfo.myDetails} onTyping={handleDetailsTyping} />
            <Button className='form-submit' type='submit' title="Submit" />
        </form>
        <Button className='add-bullet-btn' type='button' title='+ Bullet'/>
        </div>
    )



}

export {ContactForm, EduForm, WorkForm}