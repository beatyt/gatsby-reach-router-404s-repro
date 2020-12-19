import React from 'react'
import { graphql } from 'gatsby'

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <>
      <>
        {post.frontmatter.title}
      </>
    </>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
