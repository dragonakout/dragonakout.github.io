import React from 'react'
import './sections.css'
import photo from '../res/maigan_portfolio.png'


let presentationLine1 = "Hello!"

let presentationLine2 = 
"I'm Maïgan Périot, a freshly graduated C.S. student from the University of Sherbrooke in Quebec, Canada."

let presentationLine3 =
"I mostly speak French, though English, Kotlin and C# are close second."

export default function About() {
  return (
      <div className='about'>
        <div className='sectionTitle'><a className='linkOffset' id="about" data-hs-anchor="true"></a>About</div>
        <div className='aboutSectionContent'>
        <img src={photo} alt="Picture of Maïgan Périot" className='profilePhoto'/>
            <div className='aboutText'>
            {presentationLine1}<br/><br/>
            {presentationLine2}<br/><br/>
            {presentationLine3}
            </div>
        </div>
      </div>
  )
}
