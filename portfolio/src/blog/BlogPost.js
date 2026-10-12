import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './blog.css'
import PostBody from './PostBody'
import NotFound from '../components/NotFound'
import { getPostBySlug, formatDate } from './blogHelpers'

// The /blog/:slug page: one full post.
//
// useParams() is a React Router "hook" (built-in function whose name starts
// with "use") that reads the placeholders from the URL. For
// "/blog/arctic-norway" it returns { slug: "arctic-norway" }.
export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return <NotFound message="This blog post doesn't exist (anymore?)." />
  }

  return (
    <div className='blog blogPage'>
      <title>{`${post.title} | Maïgan | The Den`}</title>
      <div className='postBack'>
        <Link className='sectionSubtitleUnderline' to="/blog">← All posts</Link>
      </div>
      <div className='sectionTitle postTitle'>{post.title}</div>
      <div className='postDate'>{formatDate(post.date)}</div>
      <article className='postContent'>
        <PostBody body={post.body} />
      </article>
    </div>
  )
}
