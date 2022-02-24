import React from 'react'
import './Bars.css'

export default function AppBar() {
  return (
    <div className='appbar'>
        <div className='siteName'>Maïgan Périot</div>
        <div className='titleContainer'>
          <div className='tabName'>
            <a
            className='linkStyle'
            href="#about"
            target="_self"
            rel="noopener noreferrer">
              About
            </a>
          </div>
          <div className='tabName'>
            <a
              className='linkStyle'
              href="#projects"
              target="_self"
              rel="noopener noreferrer">
              Projects
            </a>
          </div>
          <div className='tabName'>           
           <a
              className='linkStyle'
              href="#contact"
              target="_self"
              rel="noopener noreferrer">
              Contact
            </a>
          </div>
      </div>
    </div>
  )
}