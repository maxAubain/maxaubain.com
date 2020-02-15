import React from 'react'
import { BlogPostPreview } from './BlogPostPreview'

export const BlogPostPreviews = ({ blogPosts }) => {
  const blogPostPreviews = blogPosts.map(post => {
    return (
      <div key={post.id}>
        <BlogPostPreview post={post} />
      </div>
    )
  })

  return <div className="project-categories-wrapper">{blogPostPreviews}</div>
}
