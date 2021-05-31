import React from 'react';
import Layout from '../components/Layout';
import Img from 'gatsby-image';
import { details, featuredImg, htmlContent } from '../styles/project-details.module.css';
import { graphql } from 'gatsby';

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark;
  const { title, stack, featured } = data.markdownRemark.frontmatter;
  console.log(featured);

  return (
    <Layout>
      <div className={details}>
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className={featuredImg}>
          <Img fluid={featured.childImageSharp.fluid}/>
        </div>
        <div className={htmlContent} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        stack
        title
        featured {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
