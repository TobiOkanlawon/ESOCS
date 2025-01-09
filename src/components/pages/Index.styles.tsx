import styled from "styled-components";
import { defaultPagePadding } from "../../libs/constants";

export const StyledCard = styled.div`
  padding: 12px;
  min-width: 280px;
  width: 380px;
`;

export const StyledCardHeading = styled.h2`
  font-family: serif;
  color: #0092e7;
  margin-top: 14px;
`;

export const StyledCardSubtitle = styled.p`
  font-family: serif;
  color: #c03227;
  margin-top: 8px;
`;

export const StyledCardsSection = styled.section`
  padding: 54px 74px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StyledDescriptionContainer = styled.div`
  width: 70%;
  margin: auto;
  margin-bottom: 32px;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

export const StyledCardContent = styled.p`
  line-height: 24px;
`;

export const StyledWelcomeContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  justify-content: center;
  gap: 48px;
  padding: 48px ${defaultPagePadding};
  background-color: #f5f5f5;
`;

export const StyledHeading = styled.h2`
  font-size: 3em;
  margin-bottom: 24px;
  color: #0092e7;
`;

export const StyledWelcomeHeading = StyledHeading;

export const StyledWelcomeSubtitle = styled.p`
  color: #c03227;
  margin-bottom: 12px;
`;

export const StyledWelcomeContent = styled.p`
  line-height: 24px;
  margin-bottom: 24px;
  color: #4e4f50;
`;

export const StyledMiddleHeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledMiddleHeadingContainerTop = StyledHeading;

export const StyledMiddleHeadingContainerBottom = styled.p`
  color: #c03227;
`;

export const StyledUpcomingEventsContainer = styled.div`
  padding: 48px 24px;
`;

export const StyledEventsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  padding: 48px;
`;

export const StyledEventCard = styled.article`
  height: 280px;
  box-shadow: 1px 1px 16px 0px #66738c26;
  border-radius: 24px;
  padding: 24px;
  min-width: 360px;
  width: 420px;
`;

export const StyledEventImage = styled.img`
  height: 40%;
  width: 100%;
`;

export const StyledEventCardHeading = styled.h3`
  font-size: 1.4em;
  margin-bottom: 12px;
`;

export const StyledEventCardSubtitle = styled.p`
  color: #c03227;
  margin-bottom: 8px;
`;

export const StyledCenterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const StyledWatchwordContainer = styled.section`
  border-radius: 30px;
  padding: 98px 108px;
  padding-top: 64px;
  color: white;
`;

export const StyledWatchwordHeading = styled.h2`
  font-size: 24px;
  color: white;
`;

export const StyledWatchwordParagraph = styled.p`
  font-size: 48px;
`;
