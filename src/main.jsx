/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './styles/index.css'
import { ContactForm, EduForm, WorkForm } from './components/Form.jsx';
import {ContactWrapper, EducationWrapper, WorkExperienceWrapper} from './components/Wrapper.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
