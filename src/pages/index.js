import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import { header, btn } from "../styles/home.module.css" 

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata;

  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>{title}</h2>
          <h3>{description}</h3>
          <p>Myself</p>
          <Link className={btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <img src="/victor-photo.JPG" alt="site banner"/>
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
  }
`