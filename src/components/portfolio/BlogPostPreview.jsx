import React from 'react'

export const BlogPostPreview = ({ post }) => {
  // Date element with 'posted' and 'updated'
  let date
  post.header.date.update === "" ?
    date = (
      <>
        {post.header.date.post}
      </>
    )
    :
    date = (
      <>
        {post.header.date.post} -- last revised {post.header.date.update}
      </>)

  // Body paragraphs object
  const body = post.body.map(bodyObject => {
    if (Object.keys(bodyObject)[0] === "paragraph") {
      return (<>{bodyObject.paragraph}</>)
    }
  })

  return (
    <div className="bpp-container">
      <div className="bpp-title">{post.header.title.main}</div>
      <div className="bpp-subtitle">{post.header.title.subtitle}</div>
      <div className="bpp-date">{date}</div>
      <div className="bpp-body">{body}</div>
    </div>
  )
}