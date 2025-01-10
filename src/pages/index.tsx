import React from "react";
import { graphql } from "gatsby";
import Layout from "../layouts/HomeLayout";
import {
  CharacteristicsContainer,
  Hero,
  UpcomingEvents,
  WatchWord,
  WelcomeToChurch,
} from "../components/pages/Index";
import { SliderType } from "../libs/types";
import { Slider } from "../components/pages/Index";

const cleanData = (oldData: any): SliderType[] => {
  const returnValue = [];

  for (let i of oldData) {
    returnValue.push({
      id: i.id,
      title: i.sliders.sliderTitle,
      description: i.sliders.sliderCaption,
      button: {
        text: i.sliders.buttonText,
        url: i.sliders.buttonUrl.nodes.link,
      },
    } as SliderType);
  }

  return returnValue;
};

const Index = ({ data }) => {
  let sliders = data.allWpSlider.nodes;
  sliders = cleanData(sliders);

  return (
    <Layout>
      <Slider sliders={sliders} />
      <CharacteristicsContainer />
      <WelcomeToChurch />
      <UpcomingEvents />
      <WatchWord />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allWpSlider {
      nodes {
        id
        sliders {
          buttonText
          buttonUrl {
            nodes {
              link
              uri
            }
          }
          sliderCaption
          sliderTitle
          sliderImage {
            node {
              altText
              srcSet
            }
          }
        }
      }
    }
  }
`;

// export function Head() {
//   return (
//     <Head title="Home Page || The Eternal Sacred Order of The Cherubim & Seraphim"/>
//   )
// }

export default Index;
