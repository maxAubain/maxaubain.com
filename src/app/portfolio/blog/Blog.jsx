import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { BlogPostPreviews } from './BlogPostPreviews'
import { BlogPost } from './BlogPost'
import blogPostsList from '../../../global/data/blogPosts/blog-posts-list'

export const Blog = () => {
  let { path } = useRouteMatch()
  return (
    <>
      <Switch>
        <Route exact path={path}>
          <BlogPostPreviews blogPostsList={blogPostsList} />
        </Route>
        {/* <Route path={`${path}/:blogPostId`}>
          <BlogPost blogPostsData={blogPostsData} />
        </Route> */}
      </Switch>
    </>
  )
}
