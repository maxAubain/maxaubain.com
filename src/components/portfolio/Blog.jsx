import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { navLinksParams } from '../../router/links'
import { BlogPostPreview } from './BlogPostPreview'

export const Blog = () => {
  // Get blogPosts items data from file
  const [blogPosts, setBlogPosts] = useState([])
  useEffect(() => {
    if (blogPosts.length === 0) {
      axios.get(navLinksParams.portfolio.blog.dataPath).then(response => {
        setBlogPosts(response.data)
      })
    }
  })

  // Blog post previews object
  const blogPostPreviews = blogPosts.map(post => {
    return (
      <div key={post.id}>
        <BlogPostPreview post={post} />
      </div>
    )
  })

  return <div className="project-categories-wrapper">{blogPostPreviews}</div>
}
