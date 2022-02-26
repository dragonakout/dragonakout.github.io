import React from 'react'
import './sections.css'
import emailIcon from '../res/email.png'
import cvIcon from '../res/curriculum_vitae.png'
import linkedInIcon from '../res/linkedin.png'
import githubIcon from '../res/github.png'

export default function About() {
  return (
    <div className='contact'>
      <div className='sectionTitle'><a className='linkOffset' id="contact" data-hs-anchor="true"></a>Contact</div>
      <div className='contactEnglobing'>
        <div className='contactSectionContent'>
          <div className='contactSubsection'> 
            <a href="mailto:maigan.periot@yahoo.ca">
              <img src = {emailIcon} alt="Email" className='iconContact'/> 
            </a>
            <a href="mailto:maigan.periot@yahoo.ca" className='textContact'>maigan.periot@yahoo.ca</a>
          </div>
          <div className='contactSubsection'> 
            <a href="https://dragonakout.github.io/Maïgan_Périot_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer">
              <img src = {cvIcon} alt="Resume" className='iconContact'/> 
            </a>
            <a href="https://dragonakout.github.io/Maïgan_Périot_Resume.pdf" className='textContact'
                            target="_blank"
                            rel="noopener noreferrer">Resume</a>
          </div>
        </div>
        <div className='contactSectionContent'>
          <div className='contactSubsection'> 
            <a href="https://www.linkedin.com/in/maigan-periot/"
                target="_blank"
                rel="noopener noreferrer">
              <img src = {linkedInIcon} alt="LinkedIn" className='iconContact'/>
            </a>
            <a href="https://www.linkedin.com/in/maigan-periot/" 
                className='textContact' 
                target="_blank"
                rel="noopener noreferrer">Maïgan Périot</a>
          </div>
            <div className='contactSubsection'> 
              <a 
                href="https://github.com/dragonakout"                 
                target="_blank"
                rel="noopener noreferrer">
                <img src = {githubIcon} alt="GitHub" className='iconContact'/> 
              </a>
              <a 
                href="https://github.com/dragonakout"                 
                target="_blank"
                rel="noopener noreferrer" className='textContact'>@dragonakout</a>
            </div>
        </div>
      </div>
    </div>
  )
}
