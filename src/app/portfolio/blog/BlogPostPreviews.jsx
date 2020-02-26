import React from 'react'
import { BlogPostPreview } from './BlogPostPreview'

export const BlogPostPreviews = ({ blogPostsList }) => {
  const blogPostPreviews = blogPostsList.map(post => {
    let blogPostData = require('../../../global/data/blogPosts/' +
      post.path +
      post.id)
    return (
      <div key={post.id}>
        <BlogPostPreview blogPostData={blogPostData} />
      </div>
    )
  })

  return <div className="project-categories-wrapper">{blogPostPreviews}</div>
}
