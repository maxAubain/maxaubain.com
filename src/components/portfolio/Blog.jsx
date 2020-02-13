import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BlogPostPreview } from './BlogPostPreview'

export const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([])
  const [isBlogPostsLoaded, setIsBlogPostsLoaded] = useState(false)
  const blogPostsPath = '../../src/data/postsBlog.json'
  useEffect(() => {
    axios.get(blogPostsPath).then(response => {
      setBlogPosts(response.data)
      setIsBlogPostsLoaded(true)
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
      {isBlogPostsLoaded && (
        <div className="project-categories-wrapper">{blogPostPreviews}</div>
      )}
    </>
  )
}
