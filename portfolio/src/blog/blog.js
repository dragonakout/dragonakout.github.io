import React from 'react'
import { Link } from 'react-router-dom'
import './blog.css'
import PostCard from './PostCard'
import { getAllPosts } from './blogHelpers'

const PREVIEW_COUNT = 3

// The Blog section on the home page: shows the latest few posts.
export default function Blog() {
  const latestPosts = getAllPosts().slice(0, PREVIEW_COUNT)

  return (
    <div className='blog'>
      <div className='sectionTitle'><a className='linkOffset' id="blog" data-hs-anchor="true"></a>Blog</div>
      <Link className='sectionSubtitleUnderline' to="/blog">View all blog posts</Link>

      {/* condition ? A : B  ->  show A if there are no posts, otherwise B */}
      {latestPosts.length === 0 ? (
        <div className='blogSectionContent blogEmpty'>Come back soon!</div>
      ) : (
        latestPosts.map((post) => <PostCard key={post.slug} post={post} />)
      )}
    </div>
  )
}
