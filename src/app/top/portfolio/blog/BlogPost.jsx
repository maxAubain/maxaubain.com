import React from 'react'
import { useParams } from 'react-router-dom'
import { BlogPostHeader } from './BlogPostHeader'
import { NavLinkUpRouteTop } from 'links/NavLinkUpRouteTop'
import { WebLink } from 'links/WebLink'
import './style/blog-post'

export const BlogPost = ({ blogPostsList, blogPostsDataPath }) => {
  let { blogPostId } = useParams()
  const [blogPostDataPath, blogPostFolderPath] = blogPostsList.map(
    blogPostData => {
      if (blogPostData.id === blogPostId) {
        return [
          blogPostsDataPath + blogPostData.path + '/' + blogPostData.id,
          blogPostsDataPath + blogPostData.path,
        ]
      }
    }
  )[0]
  const blogPostData = require('' + blogPostDataPath)

  let divKey = -1
  const postBody = blogPostData.body.map(bodyElement => {
    divKey = divKey + 1
    let hashKey = Object.keys(bodyElement)[0]
    switch (hashKey) {
      case 'image':
        return bodyElement.image.src === '' ? null : (
          <div className="bp-image-container" key={divKey}>
            <img
              src={require('' + blogPostFolderPath + bodyElement.image.src)}
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

  const postFootnotes = blogPostData.footnotes.map(footnoteElement => {
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
      <BlogPostHeader
        blogPostData={blogPostData}
        blogPostFolderPath={blogPostFolderPath}
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
