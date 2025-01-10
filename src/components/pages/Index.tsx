import React from "react";
import {
  HeroProps,
  CharacteristicsProps,
  WelcomeProps,
  UpcomingEventsProps,
  WatchWordProps,
  NewsAndBlogProps,
  SowingSeedsProps,
  WatchAndListenProps,
  ReachOutToUsProps,
  SliderType,
  CharacteristicsCardProps,
  SliderProps,
  CenterAlignedContainerProps,
} from "../../libs/types";
import "./slider.css";
import { ChurchIcon, LoveIcon, MembersIcon } from "../icons";
import Button from "../shared/Button";
import {
  StyledCard,
  StyledEventImage,
  StyledEventsContainer,
  StyledMiddleHeadingContainerTop,
  StyledCardHeading,
  StyledUpcomingEventsContainer,
  StyledCardsSection,
  StyledDescriptionContainer,
  StyledEventCardHeading,
  StyledCenterContainer,
  StyledCardContent,
  StyledCardSubtitle,
  StyledWelcomeContainer,
  StyledWelcomeContent,
  StyledWelcomeSubtitle,
  StyledWelcomeHeading,
  StyledMiddleHeadingContainerBottom,
  StyledEventCardSubtitle,
  StyledMiddleHeadingContainer,
  StyledEventCard,
  StyledWatchwordContainer,
} from "./Index.styles";

import Pastor from "../../images/pastor.png";
import Events from "../../images/events.png";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
// import BackgroundImage from "gatsby-background-image";
import { graphql, useStaticQuery } from "gatsby";

export const Hero: React.FC<HeroProps> = ({ title, subTitle }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subTitle}</p>
      <div></div>
    </div>
  );
};

export const Slider: React.FC<SliderProps> = ({ sliders }) => {
// const { placeholderImage } = useStaticQuery(graphql`
//   query {
//     placeholderImage: file(relativePath: { eq: "hero-1.png" }) {
//       childImageSharp {
//         gatsbyImageData(formats: [AUTO, WEBP, PNG])
//       }
//     }
//   }
// `);


  // const image = getImage(placeholderImage);
  // const bgImage = convertToBgImage(image);

  return (
    <section className="hero-container">
      <div className="hero-container-inner-container">
        <div>
          <h1 dangerouslySetInnerHTML={{ __html: sliders[2].title }} />
        </div>
        <StyledDescriptionContainer>
          <p>{sliders[0].description}</p>
        </StyledDescriptionContainer>
        <Button
          logoPosition="right"
          type="primary"
          size="lg"
          title={sliders[0].button.text}
        />
      </div>
    </section>
  );
};

const CenterAlignedContainer: React.FC<CenterAlignedContainerProps> = ({
  top,
  bottom,
}) => {
  return (
    <StyledMiddleHeadingContainer>
      <StyledMiddleHeadingContainerTop>{top}</StyledMiddleHeadingContainerTop>
      <StyledMiddleHeadingContainerBottom>
        {bottom}
      </StyledMiddleHeadingContainerBottom>
    </StyledMiddleHeadingContainer>
  );
};

export const CharacteristicsContainer: React.FC<CharacteristicsProps> = () => {
  const data: CharacteristicsCardProps[] = [
    {
      icon: <ChurchIcon />,
      title: "Worship",
      subTitle: "What to expect!",
      content:
        "Consequat semper viverra nam libero justo, laoreet sit amet cursus sit amet! Duis convallis convallis tellus, id interdum velit laoreet id donec ultrices tincidunt arcu, non sodales neque sodales ut.",
    },
    {
      icon: <MembersIcon />,
      title: "Connect",
      subTitle: "Contact members",
      content:
        "Consequat semper viverra nam libero justo, laoreet sit amet cursus sit amet! Duis convallis convallis tellus, id interdum velit laoreet id donec ultrices tincidunt arcu, non sodales neque sodales ut.",
    },
    {
      icon: <LoveIcon isActive={false} />,
      title: "God's love",
      subTitle: "Belief and History",
      content:
        "Consequat semper viverra nam libero justo, laoreet sit amet cursus sit amet! Duis convallis convallis tellus, id interdum velit laoreet id donec ultrices tincidunt arcu, non sodales neque sodales ut.",
    },
  ];

  return (
    <StyledCardsSection>
      {data.map((d) => {
        return <CharacteristicsCard {...d} />;
      })}
    </StyledCardsSection>
  );
};

const CharacteristicsCard: React.FC<CharacteristicsCardProps> = ({
  icon,
  title,
  subTitle,
  content,
}) => {
  return (
    <StyledCard>
      {icon}
      <StyledCardHeading>{title}</StyledCardHeading>
      <StyledCardSubtitle>{subTitle}</StyledCardSubtitle>
      <hr />
      <StyledCardContent>{content}</StyledCardContent>
    </StyledCard>
  );
};

export const WelcomeToChurch: React.FC<WelcomeProps> = () => {
  return (
    <StyledWelcomeContainer>
      <div className="left">
        <img src={Pastor} alt="Pastor" />
      </div>
      <div className="right">
        <StyledWelcomeHeading>You are Welcome to Church</StyledWelcomeHeading>
        <StyledWelcomeSubtitle>
          Experience the warmth of faith, community, and purpose as we come
          together to worship and grow in God's love.
        </StyledWelcomeSubtitle>

        <StyledWelcomeContent>
          Dictumst vestibulum rhoncus est pellentesque elit ullamcorper
          dignissim cras tincidunt lobortis feugiat vivamus at? Ipsum, faucibus
          vitae aliquet nec, ullamcorper sit amet risus nullam eget felis eget
          nunc lobortis mattis?
        </StyledWelcomeContent>

        <StyledWelcomeContent>
          Vitae turpis massa sed elementum tempus egestas? Morbi blandit cursus
          risus, at ultrices mi tempus imperdiet nulla malesuada pellentesque
          elit eget gravida cum sociis natoque penatibus et magnis dis
          parturient.
        </StyledWelcomeContent>

        <StyledWelcomeContent>
          Tellus elementum sagittis vitae et leo duis ut diam quam nulla
          porttitor massa id neque aliquam vestibulum morbi blandit cursus
          risus, at ultrices mi tempus! Adipiscing commodo elit, at imperdiet?
        </StyledWelcomeContent>
      </div>
    </StyledWelcomeContainer>
  );
};

const EventContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <StyledEventsContainer>{children}</StyledEventsContainer>;
};

const EventCard: React.FC<{
  title: string;
  subTitle: string;
  date: string;
}> = ({ title, subTitle, date }) => {
  return (
    <StyledEventCard>
      <StyledEventImage alt="Event picture" src={Events} />
      <StyledEventCardHeading>{title}</StyledEventCardHeading>
      <StyledEventCardSubtitle>{subTitle}</StyledEventCardSubtitle>
      <div>
        <p>{date}</p>
      </div>
    </StyledEventCard>
  );
};

export const UpcomingEvents: React.FC<UpcomingEventsProps> = () => {
  return (
    <StyledUpcomingEventsContainer>
      <CenterAlignedContainer
        top="Upcoming Events"
        bottom="Stay connected and inspired with our upcoming events"
      />
      <EventContainer>
        <EventCard
          title="Wonders of Grace"
          subTitle="Our annual first half of the year's fasting and prayer and fasting program."
          date="2nd - 22nd January, 2025"
        />
        <EventCard
          title="Blossom 2025"
          subTitle="Our women annual conference for the year 2025"
          date="2nd - 22nd January, 2025"
        />
      </EventContainer>
      <StyledCenterContainer>
        <Button
          type="primary"
          title="View more events"
          size="lg"
          logoPosition="right"
        />
      </StyledCenterContainer>
    </StyledUpcomingEventsContainer>
  );
};

export const WatchWord: React.FC<WatchWordProps> = () => {
  return (
    <StyledWatchwordContainer>
      <h2>Our Watchword</h2>
      <p>
        To evangelize and win souls for the Lord Jesus Christ, and prepare
        mankind for his second coming{" "}
      </p>
      <StyledCenterContainer>
        <Button
          type="primary"
          size="lg"
          title="Learn More about Us"
          logoPosition="right"
        />
      </StyledCenterContainer>
    </StyledWatchwordContainer>
  );
};

export const NewsAndBlog: React.FC<NewsAndBlogProps> = () => {
  return <div></div>;
};

export const SowingSeeds: React.FC<SowingSeedsProps> = () => {
  return <div></div>;
};

export const WatchAndListen: React.FC<WatchAndListenProps> = () => {
  return <div></div>;
};

export const ReachOutToUs: React.FC<ReachOutToUsProps> = () => {
  return <div></div>;
};
