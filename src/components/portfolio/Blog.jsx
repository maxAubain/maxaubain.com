import React, { useState, useEffect } from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import axios from 'axios'
import { BlogPostPreviews } from './BlogPostPreviews'
import { BlogPost } from './BlogPost'

export const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([])
  const [isBlogPostsLoaded, setIsBlogPostsLoaded] = useState(false)
  const blogPostsPath = '../../src/data/postsBlog.json'
  useEffect(() => {
    axios.get(blogPostsPath).then(response => {
      setBlogPosts(response.data)
      setIsBlogPostsLoaded(true)
    })
  }, [])

  let { path } = useRouteMatch()
  return (
    <>
      {isBlogPostsLoaded && (
        <Switch>
          <Route exact path={path}>
            <BlogPostPreviews blogPosts={blogPosts} />
          </Route>
          <Route path={`${path}/:blogPostId`}>
            <BlogPost />
          </Route>
        </Switch>
      )}
    </>
  )
}
