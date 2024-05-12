/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ContactForm, EduForm, WorkForm } from "./Form";
import { ContactDisplay, EduDisplay, WorkDisplay } from './Display';
import { Input, ParagraphInput } from "./Input";
import Button from "./Button";

//QUESTION: Can I create a single, overall Wrapper Component if could pass props into instead of 3 separate ones ???
class Education {
    constructor(uuid) {
        this.school = '';
        this.degree = '';
        this.gradDate = '';
        this.id = uuid;
    }
}

class WorkExperience {
    constructor(uuid) {
        this.company = '';
        this.position = '';
        this.startDate = '';
        this.endDate = '';
        this.id = uuid
    }
}


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
function EducationWrapper({education = new Education(uuidv4()), educList, setEducList}) {
    const [activeIndex, setActiveIndex] = useState(1);
    const [bullets, setBullets] = useState([{ value: 'GPA: 4.0; Distinguished Scholars Scholarship (Full)' }]);
 

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
       
        const updatedEducation = {...education, school: e.target.value}
        const updatedEducList = educList.map(educ =>
             educ.id === updatedEducation.id ? updatedEducation : educ
        )
        setEducList(updatedEducList)
    }
   function handleDegreeTyping(e) {
        const updatedEducation = {...education, degree: e.target.value}
        const updatedEducList = educList.map(educ =>
             educ.id === updatedEducation.id ? updatedEducation : educ
        )
        setEducList(updatedEducList)
    }
   function handleGradDateTyping(e) {
        const updatedEducation = {...education, gradDate: e.target.value}
        const updatedEducList = educList.map(educ =>
             educ.id === updatedEducation.id ? updatedEducation : educ
        )
        setEducList(updatedEducList)
   }

    function handleDelete() {
        const updatedEducList = educList.filter(educ => 
            educ.id !== education.id
        )

        setEducList(updatedEducList)
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
                school={education.school}
                degree={education.degree}
                gradDate={education.gradDate}
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
                school={education.school}
                degree={education.degree}
                gradDate={education.gradDate}
                bullets={bullets}
            />

            <Button type='button' title='remove' onClick={handleDelete}/>
            {/* <Button type='button' title='Remove Education' onClick={() => onRemoveWrapper(index)}/> */}
        </>
    )
}

function WorkExperienceWrapper({work = new WorkExperience(uuidv4()), workList, setWorkList}) {
    const [activeIndex, setActiveIndex] = useState(1);
    const [bullets, setBullets] = useState([{ value: 'Achieved 200% to required benchmarks' }, {value: 'Led team in over-achieving expectations and growing company revenue'}, {value: 'Mentored new hires, consistently training hires that became top-performers on their respective teams'}]);

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
        const updatedWork = {...work, company: e.target.value}
        const updatedWorkList = workList.map(work => 
            work.id === updatedWork.id ? updatedWork : work
        )

        setWorkList(updatedWorkList)

    }
   function handlePositionTyping(e) {
        const updatedWork = {...work, position: e.target.value}
        const updatedWorkList = workList.map(work => 
            work.id === updatedWork.id ? updatedWork : work
        )

        setWorkList(updatedWorkList)
    }
   function handleStartDateTyping(e) {
        const updatedWork = {...work, startDate: e.target.value}
        const updatedWorkList = workList.map(work => 
            work.id === updatedWork.id ? updatedWork : work
        )

        setWorkList(updatedWorkList)
   }
   function handleEndDateTyping(e) {
        const updatedWork = {...work, endDate: e.target.value}
        const updatedWorkList = workList.map(workItem => 
            workItem.id === updatedWork.id ? updatedWork : workItem
        )

        setWorkList(updatedWorkList)
   }

    function handleDelete() {
        const updatedWorkList = workList.filter(workItem => 
          work.id !== workItem.id 
        )
        setWorkList(updatedWorkList)
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
            company={work.company}
            position={work.position}
            dateStart={work.startDate}
            dateEnd={work.endDate}
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
            company={work.company}
            position={work.position}
            dateStart={work.startDate}
            dateEnd={work.endDate}
            bullets={bullets}
        />

        <Button type='button' title='remove' onClick={handleDelete}/>
        </>
    )

}

export {Education, WorkExperience, ContactWrapper, EducationWrapper, WorkExperienceWrapper}