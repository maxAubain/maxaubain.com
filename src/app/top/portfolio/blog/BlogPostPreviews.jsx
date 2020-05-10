import React from 'react'
import { BlogPostPreview } from './BlogPostPreview'

export const BlogPostPreviews = ({ blogPostsList, blogPostsDataPath }) => {
  const blogPostPreviews = blogPostsList.map(post => {
    let blogPostFolderPath = blogPostsDataPath + post.path
    let blogPostData = require('' + blogPostFolderPath + '/' + post.id)
    return (
      <div key={post.id}>
        <BlogPostPreview
          blogPostData={blogPostData}
          blogPostFolderPath={blogPostFolderPath}
          postId={post.id}
        />
      </div>
    )
  })

  return <>{blogPostPreviews}</>
}
