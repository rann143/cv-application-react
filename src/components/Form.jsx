/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {Input, ParagraphInput} from './Input'
import { ContactDisplay, EduDisplay, WorkDisplay } from './Display';
import Button from './Button';
import '../styles/forms.css';
import { useState } from 'react';


// eslint-disable-next-line react/prop-types
function ContactForm({isActive, onShow, onNameTyping, onEmailTyping, onCellTyping, onLinkedInTyping, name, email, cell, linkedIn}) {
    const [isSent, setIsSent] = useState(false);
    const [info, setInfo] = useState({ myName: name, myEmail: email, myCell: cell})

    return (
        <form className={isActive ? 'contact-form' : 'hidden'}>
            <Input className='contact-input' label='Name' name='name' placeholder='Sandy' type='text' text={name} onTyping={onNameTyping} />
            <Input className='contact-input' label='Email' name='email' placeholder='Sandy3@gmail.com' type='email' text={email} onTyping={onEmailTyping} />
            <Input className='contact-input' label='Cell' name='cell' placeholder='555-555-5566' type='tel' text={cell} onTyping={onCellTyping} />
            <Input className='contact-input' label='LinkedIn' name='linkedin' placeholder='link' type='url' text={linkedIn} onTyping={onLinkedInTyping} />
            <Button className='form-submit' type='submit' title="Submit" onClick={onShow} />
        </form>
    )
}

// eslint-disable-next-line react/prop-types
function EduForm({isActive, onShow, onAddBullet, onRemoveBullet, onBulletTyping, onSchoolTyping, onDegreeTyping, onGradDateTyping, school, degree, gradDate, bullets = [] }) {
    

    return (
        <form className={isActive ? 'edu-form' : 'hidden'}>
            <Input className='edu-input' label='School' name='school' placeholder='Tulane' type='text' text={school} onTyping={onSchoolTyping} />
            <Input className='edu-input' label='Degree' name='degree' placeholder='B.S Computer Science' type='text' text={degree} onTyping={onDegreeTyping} />
            <Input className='edu-input' label='Grad. Date' name='graduation-date' placeholder='Month Year' type='text' text={gradDate} onTyping={onGradDateTyping} />
            <div>
            Additional Details:
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
function WorkForm({ isActive, onShow, onAddBullet, onRemoveBullet, onBulletTyping,
    onCompanyTyping, onPositionTyping, onDateStartTyping, onDateEndTyping,
    company, position, dateStart, dateEnd, bullets }) {
   

    return (
        <form className={isActive ? 'work-form' : 'hidden'}>
            <Input className='work-input' label='Company' name='company' placeholder='Name' type='text' text={company} onTyping={onCompanyTyping} />
            <Input className='work-input' label='Position' name='position' placeholder='Title' type='text' text={position} onTyping={onPositionTyping} />
            <Input className='work-input' label='Start Date' name='start-date' placeholder='Month Year' type='text'text={dateStart} onTyping={onDateStartTyping}  />
            <Input className='work-input' label='End Date' name='end-date' placeholder='Month Year' type='text' text={dateEnd} onTyping={onDateEndTyping} />
            <div>
                Additional Details:
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

export {ContactForm, EduForm, WorkForm}