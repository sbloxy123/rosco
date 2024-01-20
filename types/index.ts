import { PortableTextBlock } from "sanity";

// image utility
export type SanityImageQueryResult = {
  alt: string;
  asset: {
    _ref: string;
  };
  crop: {
    _type: "sanity.imageCrop";
    bottom: number;
    left: number;
    right: number;
    top: number;
  };
  hotspot: {
    _type: "sanity.imageHotspot";
    height: number;
    width: number;
    x: number;
    y: number;
  };
};

// hero
export type heroType = {
  _id: string;
  heroHeading: PortableTextBlock[];
  heroText: PortableTextBlock[];
  heroButtonText: string;
  heroImage: {
    alt: string;
    image: string;
    asset: {
      _ref: string;
    };
    crop: {
      _type: "sanity.imageCrop";
      bottom: number;
      left: number;
      right: number;
      top: number;
    };
    hotspot: {
      _type: "sanity.imageHotspot";
      height: number;
      width: number;
      x: number;
      y: number;
    };
  };
};

// about us
export type introType = {
  introSection: {
    _id: string;
    introSubheading: string;
    introHeading: string;
    introText: PortableTextBlock[];
    aboutUsButton: string;
    introImage: {
      alt: string;
      image: string;
      asset: {
        _ref: string;
      };
      crop: {
        _type: "sanity.imageCrop";
        bottom: number;
        left: number;
        right: number;
        top: number;
      };
      hotspot: {
        _type: "sanity.imageHotspot";
        height: number;
        width: number;
        x: number;
        y: number;
      };
    };
  };
};

// services
export type serviceSectionType = {
  servicesSection: {
    servicesSubheading: string;
    servicesHeading: string;
    servicesLinkTitle: string;
  };
};

export type serviceType = {
  _id: string;
  serviceTitle: string;
  slug: string;
  serviceSummary: string;
  description: PortableTextBlock;
  coverImage: {
    alt: string;
    image: string;
  };
};

// mailing list
export type mailingListType = {
  mailingListCta: {
    _id: string;
    mailingListHeading: string;
    mailingListText: string;
    mailingListPlaceholder: string;
    mailingListButtonText: string;
  };
};

// projects
export type projectsSectionType = {
  _id: string;
  projectsSection: {
    projectsSubheading: string;
    projectsHeading: string;
    projectsButtonText: string;
  };
};

export type projectType = {
  _id: string;
  projectTitle: string;
  slug: string;
  projectSummary: string;
  projectBtnText: string;
  image: {
    alt: string;
    image: string;
  };
};
export type TotPromoType = {
  _id: string;
  totPromo: {
    promoMessage: string;
  };
};
export type testimonialsType = {
  _id: string;
  testimonialsSection: {
    testimonialsSectionTitle: string;
    testimonialsList: Array<{
      name: string;
      message: string;
    }>;
  };
};
export type awardsType = {
  _id: string;
  awardsSection: {
    awardsSectionSubTitle: string;
    awardsSectionTitle: string;
    awardsList: Array<{
      awardDate: string;
      awardTitle: string;
      awardLogo: {
        alt: string;
        image: string;
      };
    }>;
  };
};
