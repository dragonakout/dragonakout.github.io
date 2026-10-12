import React from 'react'
import logo from '../res/app_logo.svg'
import About from '../about/about'
import Contact from '../contact/contact'
import Projects from '../projects/projects'
import Blog from '../blog/blog'

// This is what App.js used to show directly. It's now its own component so
// it only appears on the "/" route.
//
// The empty <> ... </> is a "Fragment": a component must return ONE thing,
// and a Fragment lets us group several elements without adding an extra
// <div> to the page (which would break the existing flex layout).
export default function Home() {
  return (
    <>
      <img src={logo} className="App-logo" alt="logo" />
      <p className='landingFont'>
        Balancing design simplicity and depth
      </p>

      <About />
      <Blog />
      <Projects />
      <Contact />
    </>
  )
}
