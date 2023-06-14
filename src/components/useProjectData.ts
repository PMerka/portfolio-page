import { graphql, useStaticQuery } from "gatsby";

const useProjectsData = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/homePage/"}}
      sort: {frontmatter: {id: ASC}}
    ) {
      nodes {
        html
        frontmatter {
          keywords
          title
        }
      }
    }
  }
  `)

  return data
}


export default useProjectsData