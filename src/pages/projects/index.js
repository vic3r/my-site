import React from 'react';
import Layout from '../../components/Layout';
import { portfolio, projects } from '../../styles/projects.module.css'
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

export default function index({ data }) {
  const mdProjects = data.projects.nodes;
  const contact = data.contact.siteMetadata.contact;

  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've created</h3>
        <div className={projects}>
          {mdProjects.map(project => (
          <Link 
            to={`/projects/${project.frontmatter.slug}`} 
            key={project.id}
            >
              <div>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{ project.frontmatter.title }</h3>
                <p>{ project.frontmatter.stack }</p>
              </div>
          </Link>))}
        </div>
        <p>Email me: {contact}</p>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          title
          slug
          stack
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;