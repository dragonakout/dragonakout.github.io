import React from 'react'
import { Link } from 'react-router-dom'
import { formatDate } from './blogHelpers'

// A clickable card for one post, used on the home page and on /blog.
//
// `{ post }` is this component's "props": the inputs it receives. Elsewhere we
// write <PostCard post={somePost} />, and that object arrives here as `post`.
// Inside JSX, { curly braces } switch back to JavaScript, e.g. {post.title}.
export default function PostCard({ post }) {
  return (
    <Link className='postCard' to={`/blog/${post.slug}`}>
      <div className='postCardTitle'>{post.title}</div>
      <div className='postCardDate'>{formatDate(post.date)}</div>
      <div className='postCardSummary'>{post.summary}</div>
    </Link>
  )
}
