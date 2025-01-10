import { ImageCdnSourceImage } from "gatsby";

export type SliderType = {
  id: string;
  title: string;
  description: string;
  button: {
    text: string;
    url: string;
  };
  imageSrc: ImageCdnSourceImage;
}

export type BannerType = {
  id: string;
  title: string;
  subTitle: string;
  description: string;
}

export type HeroProps = {
  banners: BannerType[];
};

export type SliderProps = {
  sliders: SliderType[];
}

export type CharacteristicsDataType = {
  icon: string | React.ReactNode | Element;
  title: string;
  subTitle: string;
  content: string;
};

export type WelcomeProps = {
  // TODO: Check if this is the right way to type image sources
  // image: ImageCdnSourceImage;
  // title: string;
  // subTitle: string;
  // content: string[];
  // TODO: There's probably a gatsby export type for a link href
  // readMoreLinkDestination: string;
};

export type CharacteristicsProps = {
};

export type UpcomingEventsProps = {
  // events: EventType[];
  // viewMoreEventsLinkDestination: string;
};

export type EventType = {
  image: ImageCdnSourceImage;
  title: string;
  subTitle: string;
  startDate: Date;
  endDate: Date;
  readMoreLinkDestination: string;
};

export type WatchWordProps = {
  // aboutUsLinkDestination: string;
};

export type NewsAndBlogProps = {
  news: NewsType[];
  viewMoreNewsDestination: string;
};

export type NewsType = {
  image: ImageCdnSourceImage;
  title: string;
  content: string;
  readMoreLinkDestination: string;
};

export type SowingSeedsProps = {
  giveNowLinkDestination: string;
};

export type WatchAndListenProps = {
  liveSermonRecapLinkDestination: string;
  previousEventsLinkDestination: string;
};

export type ReachOutToUsProps = {
};

export type CharacteristicsCardProps = {
  icon: React.ReactNode;
  title: string;
  subTitle: string;
  content: string;
};

export type CenterAlignedContainerProps = {
  top: string;
  bottom: string;
}
