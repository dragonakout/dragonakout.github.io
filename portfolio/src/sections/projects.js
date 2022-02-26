import React from 'react'
import './sections.css'
import treasure_hunt_icon from '../res/treasure_hunt_logo.svg'
import rain_like_icon from '../res/rain_like_logo.png'
import rz_com_icon from '../res/RZ_com_location.png'


export default function Projects() {
  return (
      <div className='projects'>
        <div className='sectionTitle'><a className='linkOffset' id="projects" data-hs-anchor="true"></a>Projects</div>
        <a className='sectionSubtitleUnderline'
        href="https://github.com/dragonakout"
        target="_blank"
        rel="noopener noreferrer">view all on Github</a>
        <div className='projectSectionContent'>
          <a href='https://github.com/dragonakout/Treasure-Hunt' target="_blank">
            <img src={treasure_hunt_icon} alt="Treasure Hunt Icon" className='pictureProject'/>     
          </a>
          <div className='descriptionProject'>
            <a href='https://github.com/dragonakout/Treasure-Hunt' target="_blank">
            <div className='projectTitle'>Treasure Hunt</div>         
            <div className='projectSummary'>Collect treasures and gamify exploring your neighborhood with this neat little Android app!</div> 
            </a>
            <div className='projectTags'>Android, Google Maps API, Maps SDK</div>
          </div>         
        </div>
        <div className='projectSectionContent'>
          <a href='https://dragonakout.itch.io/rain-like' target="_blank">
            <img src={rain_like_icon} alt="rain_like Icon" className='pictureProject'/>     
          </a>
          <div className='descriptionProject'>
            <a href='https://dragonakout.itch.io/rain-like' target="_blank">
            <div className='projectTitle'>rain_like</div>         
            <div className='projectSummary'>A hardcore plateformer trying to be a "roguelike". Also, it's very chill.</div> 
            </a>
            <div className='projectTags'>C#, Unity Engine</div>
          </div>         
        </div>
        <div className='sectionSubtitle'>Non-Programming Projects</div>
        <div className='projectSectionContent'>
        <a href="https://dragonakout.github.io/Characterization_of_an_eclipsing_variable_star.pdf" target="_blank">
            <img src={rz_com_icon} alt="Characterization of a variable star Icon" className='pictureProject'/>     
          </a>
          <div className='descriptionProject'>
            <a href="https://dragonakout.github.io/Characterization_of_an_eclipsing_variable_star.pdf" target="_blank">
            <div className='projectTitle'>Characterization of an eclipsing variable star</div>         
            <div className='projectSummary'>In this study, we characterized an eclipsing variable star, specifically, the binary star RZ Com of the Coma Berenices constellation.*</div> 
            </a>
            <div className='projectTags'>*Only available in french</div>
            <div className='projectTags'>Astrophysics</div>
          </div>          
        </div>
      </div>
  )
}
