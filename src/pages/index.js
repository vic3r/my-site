import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import Img from 'gatsby-image';
import { header, btn } from "../styles/home.module.css";

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata;
  const srcImg = data.file.childImageSharp.fluid;

  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>{title}</h2>
          <h3>{description}</h3>
          <p>Myself</p>
          <Link className={btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <Img fluid={srcImg} />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query SiteInfo {
    site{
      siteMetadata {
        description,
        title
      }
    }
    file(relativePath: {eq: "victor-photo.JPG"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`