import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { navLinksParams } from '../../router/links'
import { BlogPostPreview } from './BlogPostPreview'

export const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([])
  const [isContentLoaded, setIsContentLoaded] = useState(false)
  useEffect(() => {
    axios.get(navLinksParams.portfolio.blog.dataPath).then(response => {
      setBlogPosts(response.data)
      setIsContentLoaded(true)
    })
  }, [])

  const blogPostPreviews = blogPosts.map(post => {
    return (
      <div key={post.id}>
        <BlogPostPreview post={post} />
      </div>
    )
  })

  return (
    <>
      {isContentLoaded && (
        <div className="project-categories-wrapper">{blogPostPreviews}</div>
      )}
    </>
  )
}
