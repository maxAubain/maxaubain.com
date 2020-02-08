import React from 'react'

export const BlogPostPreview = ({ post }) => {
  // Date element with 'posted' and conditional 'revised' values
  let date
  post.header.date.update === ""
    ? date = (<>{post.header.date.post}</>)
    : date = (<>{post.header.date.post} -- last revised {post.header.date.update}</>)

  // Blog body paragraphs object
  let key = 0
  const body = post.body.map(bodyObject => {
    if (Object.keys(bodyObject)[0].includes("p")) {
      key++
      return (<div key={key}>{bodyObject.paragraph}</div>)
    }
  })

  // Formatted blog post preview object
  return (
    <div className="bpp-container">
      <div className="bpp-title">{post.header.title.main}</div>
      <div className="bpp-subtitle">{post.header.title.subtitle}</div>
      <div className="bpp-date">{date}</div>
      <div className="bpp-body">{body}</div>
    </div>
  )
}