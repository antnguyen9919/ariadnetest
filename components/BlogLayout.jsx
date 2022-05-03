import React from 'react'
import BlogHeader from './BlogHeader'
const BlogLayout = ({children}) => {
  return (
    <>
    <BlogHeader/>
    {children}
    </>
  )
}

export default BlogLayout