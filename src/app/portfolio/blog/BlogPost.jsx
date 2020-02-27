import React from 'react'
import { useParams } from 'react-router-dom'
import { NavLinkUpRoute } from '../../../global/components/NavLinkUpRoute'
import { NavLinkUpRouteTop } from '../../../global/components/NavLinkUpRouteTop'

export const BlogPost = ({ blogPostsList, blogPostsDataPath }) => {
  // Extract blog post data from array of blog posts by blogPostId
  let { blogPostId } = useParams()
  const blogPostDataPath = blogPostsList.map(post => {
    if (post.id === blogPostId) {
      return blogPostsDataPath + post.path + '/' + post.id
    }
  })[0]
  const post = require('../../../' + blogPostDataPath)

  const blogPostFolderPath = blogPostsList.map(post => {
    if (post.id === blogPostId) {
      return blogPostsDataPath + post.path
    }
  })[0]

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
  let divKey = -1
  const postBody = post.body.map(bodyElement => {
    divKey = divKey + 1
    let hashKey = Object.keys(bodyElement)[0]
    switch (hashKey) {
      case 'image':
        return bodyElement.image.src === '' ? null : (
          <div className="bp-image-container" key={divKey}>
            <img
              src={require(`${bodyElement.image.src}`)}
              alt={bodyElement.image.alt}
              width={bodyElement.image.width}
            />
            <div className="bp-image-caption">{bodyElement.image.caption}</div>
          </div>
        )

      case 'paragraph':
        return (
          <div className="bp-paragraph-container" key={divKey}>
            <p>{bodyElement.paragraph}</p>
          </div>
        )
      case 'quote':
        return (
          <div className="bp-quote-container" key={divKey}>
            <p>{bodyElement.quote}</p>
          </div>
        )
    }
  })

  // Formatted blog post
  const blogPost = (
    <div className="bp-container">
      <div className="bp-title">{post.header.title.main}</div>
      <div className="bp-subtitle">{post.header.title.subtitle}</div>
      <div className="bp-date">{date}</div>
      <img
        className="bp-header-image"
        src={require('../../../' +
          blogPostFolderPath +
          '/' +
          post.header.image.src)}
        alt={post.header.image.alt}
        width="100%"
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
      <div className="bp-navlink-container">
        <NavLinkUpRouteTop linkObj="&larr; back to blog" />
      </div>
    </>
  )
}
