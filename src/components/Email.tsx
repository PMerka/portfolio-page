import React from 'react'
import './email.css'

export default function Email() {
  return (
    <>
    <div className='email-line'>
           <div>Email:</div>  
           <div>pavelmerka1995@gmail.com</div> 
    </div>        
    
    <div className='email-line' style={{marginTop: 20, alignItems: 'flex-end'}}>
        <div className='email-icon'>
            Copy email
        </div>

        <a href="https://github.com/PMerka" target="_blank">
        <div className='email-icon'>
            Github profile
        </div>
        </a>       
    </div>
  </>)
}
