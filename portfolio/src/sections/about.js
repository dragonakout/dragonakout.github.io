import React from 'react'
import './sections.css'
import photo from '../res/maigan_portfolio.png'


let presentationLine1 = "Hello!"

let presentationLine2 = 
"I'm Maïgan Périot, a freshly graduated C.S. student from the University of Sherbrooke in Quebec, Canada."

let presentationLine3 =
"Android and C# enthusiast."

let presentationLine4 =
"Always looking to extend the TODO list."

export default function About() {
  return (
      <div className='about'>
        <div className='sectionTitle'><a className='linkOffset' id="about" data-hs-anchor="true"></a>About</div>
        <div className='aboutSectionContent'>
        <img src={photo} alt="photo"/>
            <div className='aboutText'>
            {presentationLine1}<br/><br/>
            {presentationLine2}<br/><br/>
            {presentationLine3}<br/><br/>
            {presentationLine4}
            </div>
        </div>
      </div>
  )
}
