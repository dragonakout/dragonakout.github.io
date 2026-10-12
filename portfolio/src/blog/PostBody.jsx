import React from 'react'
import { parseBody } from './blogHelpers'

// Renders a post's text: paragraphs become <p>, [image: ...] lines become a
// picture with an optional caption.
//
// .map() turns each block into a piece of JSX. React asks for a unique `key`
// on each item of a list so it can keep track of them; the block's position
// (index) is fine here because a post's content never reorders itself.
export default function PostBody({ body }) {
  return parseBody(body).map((block, index) => {
    if (block.type === 'image') {
      return (
        <figure className='postFigure' key={index}>
          <img src={block.src} alt={block.caption} loading='lazy' />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      )
    }
    return <p key={index}>{block.text}</p>
  })
}
