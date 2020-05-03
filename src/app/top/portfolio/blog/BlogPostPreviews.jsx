import React from 'react'
import { BlogPostPreview } from './BlogPostPreview'

export const BlogPostPreviews = ({ blogPostsList, blogPostsDataPath }) => {
  const blogPostPreviews = blogPostsList.map(post => {
    let blogPostDataPath = blogPostsDataPath + post.path
    let blogPostData = require('./' + blogPostDataPath + '/' + post.id)
    return (
      <div key={post.id}>
        <BlogPostPreview
          blogPostData={blogPostData}
          blogPostDataPath={blogPostDataPath}
          postId={post.id}
        />
      </div>
    )
  })

  return <div className="project-categories-wrapper">{blogPostPreviews}</div>
}
