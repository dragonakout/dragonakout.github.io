import React from 'react'
import { Link } from 'react-router-dom'
import '../blog/blog.css'

// Shown for unknown URLs, and by BlogPost when a post doesn't exist.
export default function NotFound({ message = "This page doesn't exist." }) {
  return (
    <div className='blog blogPage'>
      <title>Not found | Maïgan | The Den</title>
      <div className='sectionTitle'>Lost at sea</div>
      <div className='blogSectionContent blogEmpty'>{message}</div>
      <Link className='sectionSubtitleUnderline' to="/">Back to the home page</Link>
    </div>
  )
}
