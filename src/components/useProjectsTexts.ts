import { graphql, useStaticQuery } from "gatsby";

const useProjectsTexts = () => {
  const data = useStaticQuery(graphql`
  query AllProjects {
    allMarkdownRemark {
      nodes {
        frontmatter {
          keywords
          title
          img {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
  `)

  return data
}


export default useProjectsTexts