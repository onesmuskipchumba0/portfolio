import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import emailjs from '@emailjs/browser';

const emailToken = import.meta.env.VITE_EMAIL_TKN;
if (!emailToken) {
  console.error('Email service configuration is missing');
}

emailjs.init(emailToken);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
