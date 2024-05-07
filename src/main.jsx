import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './components/App.jsx'
import './styles/index.css'
import { ContactForm, EduForm, WorkForm } from './components/Form.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h2>RESUME BUILDER</h2>
    <ContactForm name='' email='' cell='' />
    <EduForm school='' degree='' gradDate='' additionalInfo='' />
    <WorkForm company='' position='' dateStart='' dateEnd='' details='' />
  </React.StrictMode>,
)
