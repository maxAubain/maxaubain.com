import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'

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
    <div className="bpp-container">
      <div className="bpp-title">{blogPostData.header.title.main}</div>
      <div className="bpp-subtitle">{blogPostData.header.title.subtitle}</div>
      <div className="bpp-date">{date}</div>
      <img
        className="bp-header-image"
        src={require('../../../' +
          blogPostDataPath +
          '/' +
          blogPostData.header.image.src)}
        alt={blogPostData.header.image.alt}
        width="100%"
      />
      <p className="bpp-body">{getFirstParagraph(blogPostData.body)}</p>
      <p className="bpp-body second-paragraph">
        {getSecondParagraph(blogPostData.body)}
      </p>
      <div className="bpp-navlink-container">
        <NavLink to={`${url}/${postId}`} className="navlink">
          read more &rarr;
        </NavLink>
      </div>
    </div>
  )
}
