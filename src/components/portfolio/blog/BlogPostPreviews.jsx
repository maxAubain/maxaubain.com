import React from 'react'
import { BlogPostPreview } from './BlogPostPreview'

export const BlogPostPreviews = ({ blogPostsData }) => {
  const blogPostPreviews = blogPostsData.map(post => {
    return (
      <div key={post.id}>
        <BlogPostPreview post={post} />
      </div>
    )
  })

  return <div className="project-categories-wrapper">{blogPostPreviews}</div>
}
