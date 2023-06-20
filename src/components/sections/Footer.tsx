import React from 'react'
import './footer.css'
import GithubLink from '../GithubLink'

export default function Footer() {
  return (
    <footer>
        <div className='footer-body'>
            <div className='thanking'>
                <h4>Thanks</h4>
            I would like to thank all creators of free online programming courses on youtube,
            namely to The Net Ninja, The Coding Train, Tech With Tim, Web Dev Simplified, Traversy Media, ROB WEB s yablkom, and Franks laboratory.
            Thank you for making learning programming easy, fun and accessible for anyone.
            </div>

            <div className='footer-contact'>
                <GithubLink/>
            </div>
        </div>
    </footer>
  )
}
