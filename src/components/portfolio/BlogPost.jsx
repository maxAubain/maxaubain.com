import React from 'react'
import { NavLink, useParams, useRouteMatch } from 'react-router-dom'
import { NavLinkUpRoute } from '../common/NavLinkUpRoute'

export const BlogPost = ({ blogPosts }) => {
  // Extract blog post data from array of blog posts by blogPostId
  let { blogPostId } = useParams()
  const getPost = blogPosts => {
    for (let iBlogPosts = 0; iBlogPosts < blogPosts.length; iBlogPosts++) {
      if (blogPosts[iBlogPosts].relPath == `/${blogPostId}`) {
        return blogPosts[iBlogPosts]
      }
    }
  }
  const post = getPost(blogPosts)

  // Date object
  let date
  post.header.date.update === ''
    ? (date = <>{post.header.date.post}</>)
    : (date = (
        <>
          {post.header.date.post} -- last revised {post.header.date.update}
        </>
      ))

  // Render blog post body comprising quotes, images, and paragraphs
  let returnKey = -1
  const postBody = post.body.map(bodyElement => {
    returnKey = returnKey + 1
    let hashKey = Object.keys(bodyElement)[0]
    switch (hashKey) {
      case 'image':
        return (
          <div className="bp-image-container" key={returnKey}>
            <img
              src={bodyElement.image.src}
              alt={bodyElement.image.alt}
              width={bodyElement.image.width}
            />
            <div className="bp-image-caption">{bodyElement.image.caption}</div>
          </div>
        )
      case 'paragraph':
        return (
          <div className="bp-paragraph-container" key={returnKey}>
            <p>{bodyElement.paragraph}</p>
          </div>
        )
      case 'quote':
        return (
          <div className="bp-quote-container" key={returnKey}>
            <p>{bodyElement.quote}</p>
          </div>
        )
    }
  })

  // Formatted blog post
  const blogPost = (
    <div className="bp-container">
      <div className="bpp-title">{post.header.title.main}</div>
      <div className="bpp-subtitle">{post.header.title.subtitle}</div>
      <div className="bpp-date">{date}</div>
      <img
        className="bp-header-image"
        src={post.header.image.src}
        alt={post.header.image.alt}
      />
      <div className="bp-body">{postBody}</div>
    </div>
  )

  return (
    <>
      <div className="bp-navlink-container">
        <NavLinkUpRoute linkObj="&larr; back to blog" />
      </div>
      {blogPost}
    </>
  )
}
