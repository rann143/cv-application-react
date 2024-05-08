/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/App.css'
import { ContactWrapper, EducationWrapper, WorkExperienceWrapper } from './Wrapper'
import Button from './Button'

function App() {
  const [educs, setEducs] = useState([{ wrapper: <EducationWrapper /> }])
  const [workXps, setWorkXps] = useState([{ wrapper: <WorkExperienceWrapper /> }])


  function addEducation() {
    setEducs([...educs, { wrapper: <EducationWrapper /> }])
  }

  function addWorkExperience() {
    setWorkXps([...workXps, { wrapper: <WorkExperienceWrapper /> }])
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
       <h2>RESUME BUILDER</h2>
      <ContactWrapper />
      <h2>EDUCATION</h2>

      {
        educs.map((educ, index) => {
          

         return (
            <div key={index}>
              <div>{educ.wrapper}</div>
              {/* <button type='button' onClick={() => handleRemoveEducation(index)}>Delete Educ</button> */}
              <Button type='button' title='Delete Education' onClick={() => handleRemoveEducation(index)} />
            </div>
          )
          
        })
      }

      <Button type='button' title='Add Education' onClick={addEducation} />

      <h2>EXPERIENCE</h2>
      {
        workXps.map(workXp => {
          return workXp.wrapper;
        })
      }
      <Button type='button' title='Add Work Experience' onClick={addWorkExperience} />
    </div>
  )
}

export default App
