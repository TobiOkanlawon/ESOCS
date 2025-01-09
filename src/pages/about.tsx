import React from 'react';
import { graphql } from "gatsby";
import { BannerType } from "../components/pages/Index";
import { ABOUT_PAGE_BANNER_ID } from '../constants/queryValues';
import Layout from '../layouts/PageLayout';

const cleanData = (oldData: any): BannerType[]  => {

  const returnValue = [];
  
  for (let i of oldData) {
    returnValue.push({
      id: i.id,
      title: i.title,
      description: i.banners.bannerDescription
    } as BannerType)
  }
  
  return returnValue;
};

const About = ({data}) => {
  return (
    <Layout>
      <h1></h1>
    </Layout>
  );
};

// export const pageQuery = graphql`
//   query {
//     wpBanner(id: ${ABOUT_PAGE_BANNER_ID}) {
//         id
//         title
//         banners {
//           buttonLink
//           bannerButtonText
//           bannerDescription
//         }
//       }
//     }
// `;


export default About;
