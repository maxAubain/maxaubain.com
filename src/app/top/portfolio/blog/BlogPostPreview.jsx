import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { BlogPostHeader } from './BlogPostHeader'
import { NavLinkTop } from 'links/NavLinkTop'
import './style/blog-post-preview'

export const BlogPostPreview = ({
  blogPostData,
  blogPostFolderPath,
  postId,
}) => {
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
    <>
      <BlogPostHeader
        blogPostData={blogPostData}
        blogPostFolderPath={blogPostFolderPath}
      />
      <p className="blog-post-preview paragraph">
        {getFirstParagraph(blogPostData.body)}
      </p>
      <p className="blog-post-preview paragraph second-paragraph">
        {getSecondParagraph(blogPostData.body)}
      </p>
      <div className=" blog-post-preview navlink-container">
        <NavLinkTop
          to={`${url}/${postId}`}
          className="navlink"
          linkObj={<>read more &rarr;</>}
        />
      </div>
    </>
  )
}
