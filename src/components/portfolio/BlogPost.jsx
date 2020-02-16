import React from 'react'
import { useParams } from 'react-router-dom'

export const BlogPost = ({ blogPosts }) => {
  let { blogPostId } = useParams()

  const getPost = blogPosts => {
    for (let iBlogPosts = 0; iBlogPosts < blogPosts.length; iBlogPosts++) {
      if (blogPosts[iBlogPosts].relPath == `/${blogPostId}`) {
        return blogPosts[iBlogPosts]
      }
    }
  }
  const post = getPost(blogPosts)

  let returnElementKey = -1
  const postBody = post.body.map(element => {
    returnElementKey = returnElementKey + 1
    let elementKey = Object.keys(element)[0]
    switch (elementKey) {
      case 'image':
        return <div key={returnKey}>Image</div>
      case 'paragraph':
        return <div key={returnKey}>Paragraph</div>
      case 'quote':
        return <div key={returnKey}>Quote</div>
    }
  })

  return (
    <>
      <div className="bp-container">
        <div className="bp-body">{postBody}</div>
      </div>
    </>
  )
}
