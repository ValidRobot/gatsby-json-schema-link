import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>

export const query = graphql`
  query {
    allBooksJson {
      nodes {
        title
        author {
          name
          bio
        }
        date
      }
    }
  }
`
