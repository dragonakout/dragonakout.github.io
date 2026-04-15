import React from 'react'
import './about.css'
import photo from '../res/maigan_hiver.png'

export default function About() {
  return (
    <div className='about'>
      <div className='sectionTitle'><a className='linkOffset' id="about" data-hs-anchor="true"></a>About</div>
      <div className='aboutSectionContent'>
        <img src={photo} alt="Maïgan!" className='profilePhoto' />
        <div className='aboutText'>
          Hello!
          <br />
          I'm Maïgan! I'm a programmer and sailor. I mostly speak French, though English and C# are close second. Jeg også lære norsk, omtrent A2 nivå nå.
          <br /><br />
          I work as an embedded .NET software developer, but I take on many hats to solve the issues at hand. Over time, I have become familiar with linux networking, mDNS, the NMOS protocol and Angular. I am always looking to improve our product's architecture, the workflow of the team and create a good dynamic between our team's members through teambuilding.
          <br /><br />
          In my other life, I have been a skipper for scouts groups for a week during the summers of 2024 and 2025, I've been solo sailing on my boat for 3 summers now, and I was crew in delivering a small catamaran from North Carolina to Martinique.
        </div>
      </div>
    </div>
  )
}
