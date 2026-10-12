import React from 'react'
import './blog.css'
import PostCard from './PostCard'
import { getAllPosts } from './blogHelpers'

// The /blog page: every post, newest first.
//
// <title> inside a component is a React 19 feature: React moves it into the
// page's <head>, so the browser tab shows it while this page is open.
export default function BlogList() {
  const allPosts = getAllPosts()

  return (
    <div className='blog blogPage'>
      <title>Blog | Maïgan | The Den</title>
      <div className='sectionTitle'>Blog</div>

      {allPosts.length === 0 ? (
        <div className='blogSectionContent blogEmpty'>Come back soon!</div>
      ) : (
        allPosts.map((post) => <PostCard key={post.slug} post={post} />)
      )}
    </div>
  )
}
