/* eslint-disable no-unused-vars */
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/App.css'
import { ContactWrapper, EducationWrapper, WorkExperienceWrapper } from './Wrapper'

function App() {

  return (
    <>
       <h2>RESUME BUILDER</h2>
      <ContactWrapper />
      <EducationWrapper />
      <WorkExperienceWrapper />
    </>
  )
}

export default App
