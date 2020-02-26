import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { BlogPostPreviews } from './BlogPostPreviews'
import { BlogPost } from './BlogPost'
import blogPostsData from '../../../global/data/blog-posts'

export const Blog = () => {
  let { path } = useRouteMatch()
  return (
    <>
      <Switch>
        <Route exact path={path}>
          <BlogPostPreviews blogPostsData={blogPostsData} />
        </Route>
        <Route path={`${path}/:blogPostId`}>
          <BlogPost blogPostsData={blogPostsData} />
        </Route>
      </Switch>
    </>
  )
}
