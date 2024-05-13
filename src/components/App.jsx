/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/App.css'
import '../styles/forms.css'
import {Education, WorkExperience, ContactWrapper, EducationWrapper, WorkExperienceWrapper } from './Wrapper'
import {Button} from './Button'

function App() {
  const [educs, setEducs] = useState([{ wrapper: <EducationWrapper /> }])
  const [workXps, setWorkXps] = useState([{ wrapper: <WorkExperienceWrapper /> }])

  const [educList, setEducList] = useState([{ school: "University", degree: "B.S. Computer Science", gradDate: "2021", id: uuidv4() },
    { school: "College", degree: "B.S. Physics", gradDate: "May 2016", id: uuidv4() }])

  const [workList, setWorkList] = useState([{ company: "Company", position: "Account Executive", startDate: "Oct 2023", endDate: "Dec 2023", id: uuidv4() },
    { company: "Company 2", position: "Sales Development Representative", startDate: "Jan 2020", endDate: "Aug 2020", id: uuidv4() },
    { company: "Company 3", position: "Product Management Intern", startDate: "June 2021", endDate: "Aug 2023", id: uuidv4() }
  ])


                                            

  const arrEducationWrappers = educList.map(educ => (
    <EducationWrapper
      education={educ}
      educList={educList}
      setEducList={setEducList}
      key={educ.id}
    />
  ))

  const arrWorkWrappers = workList.map(work => 
    <WorkExperienceWrapper
      work={work}
      workList={workList}
      setWorkList={setWorkList}
      key={work.id}
    />
  )

  function handleAddEducation() {
    const updatedEducList = [...educList]
    updatedEducList.push(new Education(uuidv4()))
    setEducList(updatedEducList)
  }

  function handleAddWorkExperience() {
    const updatedWorkList = [...workList]
    updatedWorkList.push(new WorkExperience(uuidv4()));
    setWorkList(updatedWorkList)
  }

  function handleRemoveEducation(index) {
    const newEducs = [...educs];
    newEducs.splice(index, 1);
    setEducs(newEducs);
  }

  function handleRemoveWorkExperience(index) {
    const newWorkXps = [...workXps];
    newWorkXps.splice(index, 1);
    setWorkXps(newWorkXps);
  }

  return (
    <div>
       <h2 id='page-title'>RESUME BUILDER</h2>
      <ContactWrapper />
      <h2>EDUCATION</h2>
      <hr/>

      {arrEducationWrappers}
      <Button className='add-section-btn' type='button' title='Add Education' onClick={handleAddEducation} />

      <h2>EXPERIENCE</h2>
      <hr/>

      {arrWorkWrappers}
      <Button className='add-section-btn' type='button' title='Add Work Experience' onClick={handleAddWorkExperience} />
      
    </div>
  )
}

export default App