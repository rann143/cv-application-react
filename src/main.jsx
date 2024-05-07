import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './components/App.jsx'
import './styles/index.css'
import { ContactForm, EduForm } from './components/Form.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContactForm name='' email='' cell='' />
    <EduForm school='' degree='' gradDate='' additionalInfo=''/>
  </React.StrictMode>,
)
