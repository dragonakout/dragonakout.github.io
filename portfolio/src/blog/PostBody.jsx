import React from 'react'
import { parseBody } from './blogHelpers'
import InlineText from './InlineText'

// Renders a post's text: paragraphs become <p>, [image: ...] lines become a
// picture with an optional caption. **bold** and *italic* are handled by
// InlineText.jsx.
//
// .map() turns each block into a piece of JSX. React asks for a unique `key`
// on each item of a list so it can keep track of them; the block's position
// (index) is fine here because a post's content never reorders itself.
export default function PostBody({ body, slug }) {
  return parseBody(body, slug).map((block, index) => {
    if (block.type === 'missingImage') {
      // A typo in a picture's name: shown only while previewing with
      // `npm start`, so it can be fixed. Visitors of the real site see nothing.
      if (process.env.NODE_ENV !== 'development') return null
      return (
        <p className='postMissingImage' key={index}>
          ⚠️ Picture not found in this post's folder: "{block.file}"
        </p>
      )
    }
    if (block.type === 'image') {
      return (
        <figure className='postFigure' key={index}>
          <img src={block.src} alt={block.alt} loading='lazy' />
          {block.caption && <figcaption><InlineText text={block.caption} /></figcaption>}
        </figure>
      )
    }
    return <p key={index}><InlineText text={block.text} /></p>
  })
}
