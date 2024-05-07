import Input from './Input'
import { ContactDisplay, EduDisplay } from './Display';
import Button from './Button';
import '../styles/forms.css';
import { useState } from 'react';


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
function EduForm({ school, degree, gradDate, additionalInfo }) {
    const [isSent, setIsSent] = useState(false);
    const [eduInfo, setEduInfo] = useState({ mySchool: school, myDegree: degree, myGradDate: gradDate, myAdditionalInfo: additionalInfo })
    
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
        setEduInfo({...eduInfo, myAdditionalInfo: e.target.value})
    }


    function handleSubmit(e) {
        e.preventDefault();

        setIsSent(true);
    }

    if (isSent) {

        return (
            <EduDisplay
                className="edu-display"
                school={eduInfo.mySchool}
                degree={eduInfo.myDegree}
                gradDate={eduInfo.myGradDate}
                additionalInfo={eduInfo.myAdditionalInfo}
            />
        )
    }


    return (
        <form className='edu-form' onSubmit={handleSubmit}>
            <Input className='edu-input' label='School' name='school' placeholder='Tulane' type='text' text={eduInfo.mySchool} onTyping={handleSchoolTyping} />
            <Input className='edu-input' label='Degree' name='degree' placeholder='B.S Computer Science' type='text' text={eduInfo.myDegree} onTyping={handleDegreeTyping} />
            <Input className='edu-input' label='Graduation Date' name='graduation date' placeholder='2017' type='text' text={eduInfo.myGradDate} onTyping={handleGradTyping} />
            <textarea placeholder='Additional Info (Optional)' value={eduInfo.myAdditionalInfo} onChange={handleAdditionalInfoTyping}></textarea>
            <Button className='form-submit' type='submit' title="Submit" />
        </form>
    )

}

export {ContactForm, EduForm}