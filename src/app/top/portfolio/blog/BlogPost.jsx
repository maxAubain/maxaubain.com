import React from 'react'
import { useParams } from 'react-router-dom'
import { NavLinkUpRouteTop } from '../../../global/links/NavLinkUpRouteTop'
import { WebLink } from '../../../global/links/WebLink'
import './style/blog-post'

export const BlogPost = ({ blogPostsList, blogPostsDataPath }) => {
  let { blogPostId } = useParams()
  const blogPostDataPath = blogPostsList.map(post => {
    if (post.id === blogPostId) {
      return blogPostsDataPath + post.path + '/' + post.id
    }
  })[0]
  const post = require('' + blogPostDataPath)

  const blogPostFolderPath = blogPostsList.map(post => {
    if (post.id === blogPostId) {
      return blogPostsDataPath + post.path
    }
  })[0]

  let date
  post.header.date.update === ''
    ? (date = <>{post.header.date.post}</>)
    : (date = (
        <>
          {post.header.date.post} -- last revised {post.header.date.update}
        </>
      ))

  // Render blog post body comprising content and styles
  let divKey = -1
  const postBody = post.body.map(bodyElement => {
    divKey = divKey + 1
    let hashKey = Object.keys(bodyElement)[0]
    switch (hashKey) {
      case 'image':
        return bodyElement.image.src === '' ? null : (
          <div className="bp-image-container" key={divKey}>
            <img
              src={require('' +
                blogPostFolderPath +
                '/' +
                bodyElement.image.src)}
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
            <p className="bp-quote">{bodyElement.quote}</p>
          </div>
        )
      case 'divide':
        return (
          <div className="bp-divide-container" key={divKey}>
            <p>&middot;&nbsp;&nbsp;&middot;&nbsp;&nbsp;&middot;</p>
          </div>
        )
    }
  })

  const postFootnotes = post.footnotes.map(footnoteElement => {
    return (
      <div className="bp-footnote-container" key={footnoteElement.number}>
        [{footnoteElement.number}]{' '}
        <WebLink
          url={footnoteElement.url}
          className="weblink"
          linkObj={footnoteElement.text}
        />
      </div>
    )
  })

  const blogPost = (
    <div className="bp-container">
      <div className="bp-title">{post.header.title.main}</div>
      <div className="bp-subtitle">{post.header.title.subtitle}</div>
      <div className="bp-date">{date}</div>
      <div className="bp-author">Written by {post.header.author}</div>
      <img
        className="bp-header-image"
        src={require('' + blogPostFolderPath + '/' + post.header.image.src)}
        alt={post.header.image.alt}
        width="100%"
      />
      <div className="bp-body">{postBody}</div>
      <div className="bp-footnotes-container">{postFootnotes}</div>
      <div className="bp-navlink-container">
        <NavLinkUpRouteTop linkObj="&larr; back to blog posts" />
      </div>
    </div>
  )

  return <div className="project-categories-wrapper">{blogPost}</div>
}
