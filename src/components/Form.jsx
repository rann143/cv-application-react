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
function EduForm({className, school, degree, gradDate, additionalInfos = [] }) {
    const [isSent, setIsSent] = useState(false);
    const [eduInfo, setEduInfo] = useState({ mySchool: school, myDegree: degree, myGradDate: gradDate })
    const [details, setDetails] = useState(additionalInfos);

    
    
     function handleSchoolTyping(e) {
        setEduInfo({...eduInfo, mySchool: e.target.value})
    }
    function handleDegreeTyping(e) {
        setEduInfo({...eduInfo, myDegree: e.target.value})
    }
    function handleGradTyping(e) {
        setEduInfo({...eduInfo, myGradDate: e.target.value})
    }

    function handleAdditionalInfoTyping(e) {
        setDetails([...details, e.target.value])
    }


    function handleSubmit(e) {
        e.preventDefault();
        if (!eduInfo.mySchool && !eduInfo.myDegree && !eduInfo.myGradDate && !eduInfo.myAdditionalInfo) {
            return alert('Please enter Education')
        }
        setIsSent(true);
    }

    if (isSent) {

        return (
            <EduDisplay
                className="edu-display"
                school={eduInfo.mySchool}
                degree={eduInfo.myDegree}
                gradDate={eduInfo.myGradDate}
                additionalInfos={details}
            />
        )
    }

    const bulletWrapper = <BulletWrapper placeholder='Additional Details (Optional)' texts={details} onTyping={handleAdditionalInfoTyping} />


    return (
        <form className={'edu-form'} onSubmit={handleSubmit}>
            <Input className='edu-input' label='School' name='school' placeholder='Tulane' type='text' text={eduInfo.mySchool} onTyping={handleSchoolTyping} />
            <Input className='edu-input' label='Degree' name='degree' placeholder='B.S Computer Science' type='text' text={eduInfo.myDegree} onTyping={handleDegreeTyping} />
            <Input className='edu-input' label='Grad. Date' name='graduation-date' placeholder='Month Year' type='text' text={eduInfo.myGradDate} onTyping={handleGradTyping} />
            {/* <ParagraphInput label='Bulletpoint' placeholder='Additional Info (Optional)' text={eduInfo.myAdditionalInfo} onTyping={handleAdditionalInfoTyping} /> */}
            {bulletWrapper}
            <Button className='form-submit' type='submit' title="Submit" />
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