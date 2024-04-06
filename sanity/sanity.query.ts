import { groq } from "next-sanity";
import client from "./sanity.client";
import imageUrlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import { SanityImageQueryResult } from "@/types";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function urlFor(source: String) {
  return builder.image(source); // Directly return the URL string
}

interface Hotspot {
  width: number;
  x: number;
  y: number;
  _type: "sanity.imageHotspot";
  height: number;
}

export const getCroppedImageSrc = (image: SanityImageQueryResult): string => {
  const imageRef = image.assetRef || image.asset?._ref;
  const crop = image.crop;

  if (!imageRef) {
    console.error("No image reference found");
    return ""; // or return a default image placeholder if you have one
  }

  // Assuming these functions are updated to safely handle the case where imageRef is not a valid SanityImageSource
  const { width, height } = getImageDimensions(imageRef);
  let url = urlFor(imageRef);
  let urlBuilder = urlFor(imageRef); // This now returns an ImageUrlBuilder object

  if (crop) {
    const { width, height } = getImageDimensions(imageRef);
    const left = Math.round(width * crop.left);
    const top = Math.round(height * crop.top);
    const croppedWidth = Math.round(width * (1 - crop.left - crop.right));
    const croppedHeight = Math.round(height * (1 - crop.top - crop.bottom));

    urlBuilder = urlBuilder.rect(left, top, croppedWidth, croppedHeight);
  }

  return urlBuilder.url();
};

export default function getPositionFromHotspot(hotspot?: Hotspot) {
  // Marking `hotspot` as optional
  if (!hotspot) return "center";

  return `${hotspot.x * 100}% ${hotspot.y * 100}%`;
}

export const getHero = groq`*[_type == "homepage"]{
      _id,
      heroHeading,
      heroText,
      heroButtonText,
      heroImage {
        alt,
        "image": asset->url,
        asset {
          _ref
        },
        crop {
          _type,
          bottom,
          left,
          top,
          right
        },
        hotspot {
          _type,
          height,
          width,
          x,
          y
        }
      },
    }`;

export const getIntro = groq`*[_type == 'homepage'] {
        _id,
      introSection {
        introSubheading,
        introHeading,
        introText,
        aboutUsButton,
        introImage {
        alt,
        "image": asset->url,
        asset {
          _ref
        },
        crop {
          _type,
          bottom,
          left,
          top,
          right
        },
        hotspot {
          _type,
          height,
          width,
          x,
          y
        }
      },
      }
    }`;

export const getServicesSectionTitles = groq`*[_type == 'homepage'] {
      servicesSection {
        servicesSubheading,
        servicesHeading,
        servicesLinkTitle,
      }
    }`;

export const getServiceLinks = groq`*[_type == "service"]{
      _id,
      serviceTitle,
      "slug": slug.current,
      coverImage {alt, "image": asset->url},
      servicePageImage {alt, "image": asset->url},
      serviceAsideList,
      additionalInfo,
      description,
      serviceSummary,
      serviceSummaryBodyVersion,
    }`;

export const getSingleService = groq`*[_type == "service" && slug.current == $slug][0]{
      _id,
      serviceTitle,
      "slug": slug.current,
      serviceSummary,
      serviceSummaryBodyVersion,
      coverImage {alt, "image": asset->url},
      servicePageImage {
        alt,
          "image": asset->url,
          asset {
            _ref
          },
          crop {
            _type,
            bottom,
            left,
            top,
            right
          },
          hotspot {
            _type,
            height,
            width,
            x,
            y
          }
          },
      serviceBannerImage {
          alt,
          "image": asset->url,
          asset {
            _ref
          },
          crop {
            _type,
            bottom,
            left,
            top,
            right
          },
          hotspot {
            _type,
            height,
            width,
            x,
            y
          }
          },
      description,
      serviceAsideList,
      additionalInfo,
      awardHighlight {
        awardDate,
        awardLogo {alt, "image": asset->url},
        awardTitle,
      },
      gallery {
            images[] {
              _id,
              alt,
              "image": asset->url,
              asset->{_ref},
              crop {
                _type,
                bottom,
                left,
                top,
                right
              },
              hotspot {
                _type,
                height,
                width,
                x,
                y
              }
            }
          },
    }`;

export const getMailingListCta = groq`*[_type == "homepage"]{
      mailingListCta {
        mailingListHeading,
        mailingListText,
        mailingListPlaceholder,
        mailingListButtonText
      }
    }`;

export const getProjectsSection = groq`*[_type == "homepage"]{
      projectsSection {
        projectsSubheading,
        projectsHeading,
        projectsButtonText,
      }
    }`;

export const getAllProjects = groq`*[_type == "projects"] {
      _id,
      projectTitle,
      "slug": slug.current,
      projectSummary,
      completionTimeframe,
      projectLocation,
      "categories": categories[]->{
        serviceTitle,
        _id,
        serviceBannerImage{
          alt,
          "image": asset->url, // For fetching the URL
          "assetRef": asset._ref,
        crop {
          _type,
          bottom,
          left,
          top,
          right
        },
        hotspot {
          _type,
          height,
          width,
          x,
          y
        }
        }
      },
      image {
        alt,
        "image": asset->url,
        asset{
          _ref,
            },
        crop {
          _type,
          bottom,
          left,
          top,
          right
        },
        hotspot {
          _type,
          height,
          width,
          x,
          y
        }
      },
      beforeAfter {
        beforeImage {
          alt,
          "image": asset->url,
          asset->{_ref},
        },
        afterImage {
          alt,
          "image": asset->url,
          asset->{_ref},
        },

      },
      gallery {
          images[] {
            alt,
            "image": asset->url,
            asset->{_ref},
            crop {
              _type,
              bottom,
              left,
              top,
              right
            },
            hotspot {
              _type,
              height,
              width,
              x,
              y
            }
          }
        }
    }
      `;

export const getTotPromo = groq`*[_type == "homepage"]{
      totPromo {
        promoMessage
      }
    }`;

export const getTestimonials = groq`*[_type == "homepage"] {
      testimonialsSection{
        testimonialsSectionTitle,
        testimonialsList[]{
          name,
          message
        }
      }
    }`;

export const getAwards = groq`*[_type == "homepage"] {
      awardsSection{
        awardsSectionSubTitle,
        awardsSectionTitle,
        awardsList[]{
          awardDate,
          awardTitle,
          awardLogo {alt, "image": asset->url},
        }
      }
    }`;

export const getContactContent = groq`*[_type == "homepage"] {
        contactUs {
          title,
          message,
          address,
          contactNumber,
          emailAddress,
          phoneButtonText,
          emailButtonText
        }
    }`;

export const getAboutPageContent = groq`*[_type == "innerPage"] {
      _id,
      title,
      aboutPage {
        _id,
        pageHeading,
        pageImage {
          alt,
        "image": asset->url,
        asset {
          _ref
        },
        crop {
          _type,
          bottom,
          left,
          top,
          right
        },
        hotspot {
          _type,
          height,
          width,
          x,
          y
        }
      },
        introHeading,
        introText,
        introBgImage{
        alt,
        "image": asset->url,
        asset {
          _ref
        },
        crop {
          _type,
          bottom,
          left,
          top,
          right
        },
        hotspot {
          _type,
          height,
          width,
          x,
          y
        }
      },
        featureText,
        contentArea
      }
    }
    `;

export const getServicesPageContent = groq`*[_type == "innerPage" && defined(ServicesPage)] {
        _id,
      ServicesPage {
        // _id,
        pageHeading,
        pageImage {
              alt,
            "image": asset->url,
            asset {
              _ref
            },
            crop {
              _type,
              bottom,
              left,
              top,
              right
            },
            hotspot {
              _type,
              height,
              width,
              x,
              y
            }
          },
          introBgImage{
            alt,
            "image": asset->url,
            asset {
              _ref
            },
            crop {
              _type,
              bottom,
              left,
              top,
              right
            },
            hotspot {
              _type,
              height,
              width,
              x,
              y
            }
          },
        introHeading,
        introText
      }
    }
    `;

export const getProjectsPageContent = groq`*[_type == "innerPage"] {
       _id,
      title,
      ProjectsPage {
        _id,
        pageHeading,
        pageImage {
            alt,
          "image": asset->url,
          asset {
            _ref
          },
          crop {
            _type,
            bottom,
            left,
            top,
            right
          },
          hotspot {
            _type,
            height,
            width,
            x,
            y
          }
        },
        BgImage{
          alt,
          "image": asset->url,
          asset {
            _ref
          },
          crop {
            _type,
            bottom,
            left,
            top,
            right
          },
          hotspot {
            _type,
            height,
            width,
            x,
            y
          }
        },
      }
    }
    `;

export const getFaqPageContent = groq`*[_type == "innerPage"] {
       _id,
      FaqPage {
        pageHeading,
        pageImage {
            alt,
          "image": asset->url,
          asset {
            _ref
          },
          crop {
            _type,
            bottom,
            left,
            top,
            right
          },
          hotspot {
            _type,
            height,
            width,
            x,
            y
          }
        },
        BgImage{
          alt,
          "image": asset->url,
          asset {
            _ref
          },
          crop {
            _type,
            bottom,
            left,
            top,
            right
          },
          hotspot {
            _type,
            height,
            width,
            x,
            y
          }
        },
        introTitle,
        introMessage,
        formPlaceholder,
      }
    }
    `;

export const getFaqs = groq`*[_type == "faq"] {
        _id,
        question,
        answer
}`;

export const getContactUsPageContent = groq`*[_type == "innerPage"] {
       _id,
      ContactPage {
        pageHeading,
      }
    }
    `;

export const getMetadata = groq`*[_type == "metadata"]{
      companyName,
      description,
      contactDetails {
        telephone,
        email
      },
      location {
        streetAddress,
        addressLocality,
        addressRegion,
        addressCountry,
        postalCode,
        geo {
          latitude,
          longitude
        }
      },
      openingHours {
        open,
        close
      },
      areasServed
    }
    `;
export const getPoliciesPageData = groq`*[_type == "metadata"]{
      policies {
        pageTitle,
        policies,
      }
    }
    `;
