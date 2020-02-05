import React from 'react'

export const BlogPostPreview = ({ post }) => {
  // Date element with 'posted' and 'updated'
  let date
  post.header.date.update === "" ?
    date = (
      <>
        Posted: {post.header.date.post}
      </>
    )
    :
    date = (
      <>
        Posted: {post.header.date.post}, Updated: {post.header.date.update}
      </>)

  // Body paragraphs object
  const bodyPreview = post.body.map(bodyObject => {
    if (Object.keys(bodyObject)[0] === "paragraph") {
      return (<p>{bodyObject.paragraph}</p>)
    }
  })

  return (
    <>
      <div>{post.header.title.main}</div>
      <div>{post.header.title.subtitle}</div>
      <div>{date}</div>
      <div>{bodyPreview}</div>
    </>
  )
}