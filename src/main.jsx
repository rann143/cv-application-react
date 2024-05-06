import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './styles/index.css'
import { ContactForm } from './components/Form.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ContactForm />
  </React.StrictMode>,
)
