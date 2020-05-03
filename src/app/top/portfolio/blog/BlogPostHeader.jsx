import React from 'react'
import './style/blog-post-header'

export const BlogPostHeader = ({ blogPostData, blogPostFolderPath }) => {
  const date = blogPostData.header.date.post
  const dateUpdated = [blogPostData.header.date.updated].map(updated => {
    if (updated != '') {
      return ` -- last revised ${blogPostData.header.date.updated}`
    }
  })

  return (
    <>
      <div className="bp-title">{blogPostData.header.title.main}</div>
      <div className="bp-subtitle">{blogPostData.header.title.subtitle}</div>
      <div className="bp-date">
        {date}
        {dateUpdated}
      </div>
      <div className="bp-author">Written by {blogPostData.header.author}</div>
      <img
        className="bp-header-image"
        src={require('' + blogPostFolderPath + blogPostData.header.image.src)}
        alt={blogPostData.header.image.alt}
        width="100%"
      />{' '}
    </>
  )
}
