/* eslint-disable no-unused-vars */
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ContactForm, EduForm, WorkForm } from "./Form";
import { ContactDisplay, EduDisplay, WorkDisplay } from './Display';
import { Input, ParagraphInput } from "./Input";

//QUESTION: Can I create a single, overall Wrapper Component if could pass props into instead of 3 separate ones ???

function ContactWrapper() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [info, setInfo] = useState({ name: "", email: "", cell: "", linkedIn: "" });

    function handleNameTyping(e) {
        setInfo({...info, name: e.target.value})
    }
   function handleEmailTyping(e) {
        setInfo({...info, email: e.target.value})
    }
   function handleCellTyping(e) {
        setInfo({...info, cell: e.target.value})
   }
   function handleLinkedInTyping(e) {
        setInfo({...info, linkedIn: e.target.value})
   }
    
    return (
        <>
            
        <ContactForm
            isActive={activeIndex === 0}
            onShow={(e) => {
                //Need to use preventDefault since this button is of type 'submit'
                e.preventDefault();
                setActiveIndex(1)
            }}
            name={info.name}
            email={info.email}
            cell={info.cell}
            linkedIn={info.linkedIn}
            onNameTyping={handleNameTyping}
            onEmailTyping={handleEmailTyping}
            onCellTyping={handleCellTyping}
            onLinkedInTyping={handleLinkedInTyping}
        />

        <ContactDisplay 
            isActive={activeIndex === 1}
            onShow={(e) => setActiveIndex(0)}
            name={info.name}
            email={info.email}
            cell={info.cell}
            linkedIn={info.linkedIn}
        />
            
        </>
        
   )


}

// eslint-disable-next-line react/prop-types
function EducationWrapper() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [info, setInfo] = useState({ school: "", degree: "", gradDate: "" });
    const [bullets, setBullets] = useState([{ value: '' }]);
 

    function handleBulletTyping(index, event) {
        const newValues = [...bullets]
        newValues[index].value = event.target.value;
        setBullets(newValues);
    }

    function handleAddBullet() {
        setBullets([...bullets, { value: '' }])
    }

    function handleRemoveBullet(index) {
        const newBullets = [...bullets]
        newBullets.splice(index, 1);
        setBullets(newBullets);
    }

   function handleSchoolTyping(e) {
        setInfo({...info, school: e.target.value})
    }
   function handleDegreeTyping(e) {
        setInfo({...info, degree: e.target.value})
    }
   function handleGradDateTyping(e) {
        setInfo({...info, gradDate: e.target.value})
   }

    
    return (
        <>
            <EduForm
                isActive={activeIndex === 0}
                onShow={(e) => {
                    //Need to use preventDefault since this button is of type 'submit'
                    e.preventDefault();
                    setActiveIndex(1)
                }}
                school={info.school}
                degree={info.degree}
                gradDate={info.gradDate}
                bullets={bullets}
                onSchoolTyping={handleSchoolTyping}
                onDegreeTyping={handleDegreeTyping}
                onGradDateTyping={handleGradDateTyping}
                onAddBullet={handleAddBullet}
                onBulletTyping={handleBulletTyping}
                onRemoveBullet={handleRemoveBullet}
            />
            <EduDisplay
                isActive={activeIndex === 1}
                onShow={(e) => setActiveIndex(0)}
                school={info.school}
                degree={info.degree}
                gradDate={info.gradDate}
                bullets={bullets}
            />
        </>
    )
}

function WorkExperienceWrapper() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [info, setInfo] = useState({ company: '', position: '', dateStart: '', dateEnd: '' });
    const [bullets, setBullets] = useState([{ value: '' }]);

    function handleBulletTyping(index, event) {
        const newValues = [...bullets]
        newValues[index].value = event.target.value;
        setBullets(newValues);
    }

    function handleAddBullet() {
        setBullets([...bullets, { value: '' }])
    }

    function handleRemoveBullet(index) {
        const newBullets = [...bullets]
        newBullets.splice(index, 1);
        setBullets(newBullets);
    }

    function handleCompanyTyping(e) {
        setInfo({...info, company: e.target.value})
    }
   function handlePositionTyping(e) {
        setInfo({...info, position: e.target.value})
    }
   function handleStartDateTyping(e) {
        setInfo({...info, startDate: e.target.value})
   }
   function handleEndDateTyping(e) {
        setInfo({...info, endDate: e.target.value})
   }

    return (
        <>
            
        <WorkForm
            isActive={activeIndex === 0}
            onShow={(e) => {
                //Need to use preventDefault since this button is of type 'submit'
                e.preventDefault();
                setActiveIndex(1)
            }}
            company={info.company}
            position={info.position}
            dateStart={info.startDate}
            dateEnd={info.endDate}
            bullets={bullets}
            onCompanyTyping={handleCompanyTyping}
            onPositionTyping={handlePositionTyping}
            onDateStartTyping={handleStartDateTyping}
            onDateEndTyping={handleEndDateTyping}
            onAddBullet={handleAddBullet}
            onBulletTyping={handleBulletTyping}
            onRemoveBullet={handleRemoveBullet}
        />

        <WorkDisplay 
            isActive={activeIndex === 1}
            onShow={(e) => setActiveIndex(0)}
            company={info.company}
            position={info.position}
            dateStart={info.startDate}
            dateEnd={info.endDate}
            bullets={bullets}
        />

        </>
    )

}

export {ContactWrapper, EducationWrapper, WorkExperienceWrapper}