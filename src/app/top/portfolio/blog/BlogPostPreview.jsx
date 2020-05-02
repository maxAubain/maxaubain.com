import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { NavLinkTop } from '../../../global/links/NavLinkTop'
import './style/blog-post-preview'

export const BlogPostPreview = ({ blogPostData, blogPostDataPath, postId }) => {
  // Date element with 'posted' and conditional 'revised' values
  let date
  blogPostData.header.date.update === ''
    ? (date = <>{blogPostData.header.date.post}</>)
    : (date = (
        <>
          {blogPostData.header.date.post} -- last revised{' '}
          {blogPostData.header.date.update}
        </>
      ))

  // Retrieve first paragraph text from post body object
  const getFirstParagraph = function(bodyHashArray) {
    for (let iPostBody = 0; iPostBody < bodyHashArray.length; iPostBody++) {
      if (Object.keys(bodyHashArray[iPostBody])[0] === 'paragraph') {
        return bodyHashArray[iPostBody].paragraph
      }
    }
  }

  const getSecondParagraph = function(bodyHashArray) {
    let isFirstParagraphPassed = false
    for (let iPostBody = 0; iPostBody < bodyHashArray.length; iPostBody++) {
      if (
        Object.keys(bodyHashArray[iPostBody])[0] === 'paragraph' &&
        isFirstParagraphPassed == false
      ) {
        isFirstParagraphPassed = true
      } else if (
        Object.keys(bodyHashArray[iPostBody])[0] === 'paragraph' &&
        isFirstParagraphPassed == true
      ) {
        return bodyHashArray[iPostBody].paragraph
      }
    }
  }

  let { url } = useRouteMatch()
  return (
    <div className="bp-container">
      <div className="bp-title">{blogPostData.header.title.main}</div>
      <div className="bp-subtitle">{blogPostData.header.title.subtitle}</div>
      <div className="bp-date">{date}</div>
      <div className="bp-author">Written by {blogPostData.header.author}</div>
      <img
        className="bp-header-image"
        src={require('../../../' +
          blogPostDataPath +
          '/' +
          blogPostData.header.image.src)}
        alt={blogPostData.header.image.alt}
        width="100%"
      />
      <p className="bpp-paragraph">{getFirstParagraph(blogPostData.body)}</p>
      <p className="bpp-paragraph second-paragraph">
        {getSecondParagraph(blogPostData.body)}
      </p>
      <div className="bpp-navlink-container">
        <NavLinkTop
          to={`${url}/${postId}`}
          className="navlink"
          linkObj={<>read more &rarr;</>}
        />
      </div>
    </div>
  )
}
