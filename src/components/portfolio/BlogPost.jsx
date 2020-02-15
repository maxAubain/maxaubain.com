import React from 'react'
import { useParams } from 'react-router-dom'

export const BlogPost = ({}) => {
  let { blogPostId } = useParams()

  return <>{blogPostId}</>
}
