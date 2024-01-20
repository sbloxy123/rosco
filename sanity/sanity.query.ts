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
  return builder.image(source);
}

export const getCroppedImageSrc = (image: SanityImageQueryResult) => {
  const imageRef = image.asset._ref;
  const crop = image.crop;
  // get the image's og dimensions
  const { width, height } = getImageDimensions(imageRef);
  if (Boolean(crop)) {
    // compute the cropped image's area
    const croppedWidth = Math.floor(width * (1 - (crop.right + crop.left)));
    const croppedHeight = Math.floor(height * (1 - (crop.top + crop.bottom)));
    // compute the cropped image's position
    const left = Math.floor(width * crop.left);
    const top = Math.floor(height * crop.top);
    // gather into a url
    return urlFor(imageRef).rect(left, top, croppedWidth, croppedHeight).url();
  }
  return urlFor(imageRef).url();
};

export async function getHero() {
  return client.fetch(
    groq`*[_type == "homepage"]{
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
    }`
  );
}

export async function getIntro() {
  return client.fetch(
    groq`*[_type == 'homepage'] {
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
    }`
  );
}
export async function getServicesSectionTitles() {
  return client.fetch(
    groq`*[_type == 'homepage'] {
      servicesSection {
        servicesSubheading,
        servicesHeading,
        servicesLinkTitle,
      }
    }`
  );
}

export async function getServiceLinks() {
  return client.fetch(
    groq`*[_type == "service"]{
      _id,
      serviceTitle,
      "slug": slug.current,
      coverImage {alt, "image": asset->url},
    }`
  );
}

export async function getSingleService(slug: string) {
  return client.fetch(
    groq`*[_type == "service" && slug.current == $slug][0]{
      _id,
      serviceTitle,
      coverImage { alt, "image": asset->url },
      description
    }`,
    { slug }
  );
}

export async function getMailingListCta() {
  return client.fetch(
    groq`*[_type == "homepage"]{
      mailingListCta {
        mailingListHeading,
        mailingListText,
        mailingListPlaceholder,
        mailingListButtonText
      }
    }`
  );
}
export async function getProjectsSection() {
  return client.fetch(
    groq`*[_type == "homepage"]{
      projectsSection {
        projectsSubheading,
        projectsHeading,
        projectsButtonText,
      }
    }`
  );
}

export async function getAllProjects() {
  return client.fetch(
    groq`*[_type == "projects"] {
      _id,
      projectTitle,
      "slug": slug.current,
      projectSummary,
      projectBtnText,
      image {alt, "image": asset->url},
    }`
  );
}

export async function getTotPromo() {
  return client.fetch(
    groq`*[_type == "homepage"]{
      totPromo {
        promoMessage
      }
    }`
  );
}

export async function getTestimonials() {
  return client.fetch(
    groq`*[_type == "homepage"] {
      testimonialsSection{
        testimonialsSectionTitle,
        testimonialsList[]{
          name,
          message
        }
      }
    }`
  );
}
export async function getAwards() {
  return client.fetch(
    groq`*[_type == "homepage"] {
      awardsSection{
        awardsSectionSubTitle,
        awardsSectionTitle,
        awardsList[]{
          awardDate,
          awardTitle,
          awardLogo {alt, "image": asset->url},
        }
      }
    }`
  );
}
