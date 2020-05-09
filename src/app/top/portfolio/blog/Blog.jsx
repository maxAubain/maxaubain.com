import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { BlogPostPreviews } from './BlogPostPreviews'
import { BlogPost } from './BlogPost'
import blogPostsList from './data/blog-posts-list'
import './style/blog'

const blogPostsDataPath = './data/blogPosts'
export const Blog = () => {
  let { path } = useRouteMatch()
  return (
    <div className="project-categories-wrapper">
      <div className="blog container">
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
      </div>
    </div>
  )
}
