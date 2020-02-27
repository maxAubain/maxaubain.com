import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { BlogPostPreviews } from './BlogPostPreviews'
import { BlogPost } from './BlogPost'
import blogPostsList from '../../../global/data/blogPosts/blog-posts-list'
const blogPostsDataPath = 'global/data/blogPosts/'

export const Blog = () => {
  let { path } = useRouteMatch()
  return (
    <>
      <Switch>
        <Route exact path={path}>
          <BlogPostPreviews
            blogPostsList={blogPostsList}
            blogPostsDataPath={blogPostsDataPath}
          />
        </Route>
        <Route path={`${path}/:blogPostId`}>
          <BlogPost
            blogPostsList={blogPostsList}
            blogPostsDataPath={blogPostsDataPath}
          />
        </Route>
      </Switch>
    </>
  )
}
