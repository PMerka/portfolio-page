import React, { useState } from 'react'
import './contact.css'

export default function Email() {
  const [copyText, setCopyText] = useState('Copy email')
  const copyEmail = () => {
    navigator.clipboard.writeText("pavelmerka1995@gmail.com")
    setCopyText('Email copied')
    setTimeout(() => {
      setCopyText('Copy email')
    }, 5000);
  }
  
  return (
    <>
    <div className='contact-line short-text'>
           <div>Email:</div>  
           <div>pavelmerka1995@gmail.com</div> 
    </div>        
    
    <div className='contact-line short-text'>
        <button className='email-icon' onClick={() => copyEmail()}>
            {copyText}
        </button>

        <a href="https://github.com/PMerka" target="_blank">
        <div className='email-icon'>
            Github profile
        </div>
        </a>       
    </div>
  </>)
}
