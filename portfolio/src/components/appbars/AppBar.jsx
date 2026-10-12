import React from 'react'
import { Link } from 'react-router-dom'
import './Bars.css'

// <Link to="..."> renders a normal <a> tag, but clicking it changes the page
// instantly through the router instead of reloading the whole site.
//
// Section links use "/#about" (not just "#about") so they also work when
// you're on a blog page: they go back to "/" and then scroll to the section
// (ScrollManager.jsx does the scrolling).
export default function AppBar() {
  return (
    <div className='appbar'>
      <div className='siteName'>
        <Link className='linkStyle' to="/">Maïgan Périot</Link>
      </div>
      <div className='titleContainer'>
        <div className='tabName'>
          <Link className='linkStyle' to="/#about">About</Link>
        </div>
        <div className='tabName'>
          <Link className='linkStyle' to="/#blog">Blog</Link>
        </div>
        <div className='tabName'>
          <Link className='linkStyle' to="/#projects">Projects</Link>
        </div>
        <div className='tabName'>
          <Link className='linkStyle' to="/#contact">Contact</Link>
        </div>
      </div>
    </div>
  )
}
