export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const HomepagePartsFragmentDoc = gql`
    fragment HomepageParts on Homepage {
  __typename
  heroSlides {
    __typename
    image
    mobileImage
    imageAlt
  }
  aboutSection {
    __typename
    eyebrow
    subTitle
    titleLine1
    titleLine2
    description
    linkText
  }
  purposeSection {
    __typename
    image
    visionText
    missionText
  }
  whyChooseUs {
    __typename
    eyebrow
    titleLine1
    titleLine2
    description
  }
  identityCards {
    __typename
    number
    label
    title
    description
    supportingText
    image
    imageAlt
    href
  }
  features {
    __typename
    number
    label
    title
    description
    iconName
    image
    imageAlt
  }
  ctaSection {
    __typename
    eyebrow
    title
    description
    primaryButtonText
    primaryButtonUrl
    secondaryButtonText
    secondaryButtonUrl
  }
}
    `;
export const StorepagePartsFragmentDoc = gql`
    fragment StorepageParts on Storepage {
  __typename
  heroSection {
    __typename
    eyebrow
    titleLine1
    titleLine2
    description
    buttonText
    buttonUrl
    availabilityText
    image
    imageAlt
  }
  collectionsShowcase {
    __typename
    intro {
      __typename
      subheading
      headingLine1
      headingLine2
      headingHighlight
      description
    }
    collections {
      __typename
      label
      heading
      supportingText
      ctaText
      linkText
      image
      imageAlt
      bgWord
      layout
    }
  }
  visitBanner {
    __typename
    eyebrow
    titleLine1
    titleLine2
    description
    button1Text
    button1Url
    button2Text
    button2Url
    image
    imageAlt
  }
  whatsappCta {
    __typename
    title
    description
    buttonText
    noteText
  }
}
    `;
export const ContactpagePartsFragmentDoc = gql`
    fragment ContactpageParts on Contactpage {
  __typename
  heroSection {
    __typename
    eyebrow
    titleLine1
    titleLine2
    description
    button1Text
    button1Url
    button2Text
    button2Url
    image
    imageAlt
  }
  contactCards {
    __typename
    iconName
    title
    description
    info
    actionText
    link
  }
  reachUsSection {
    __typename
    eyebrow
    title
    methods {
      __typename
      iconName
      title
      description
      primaryText
      primaryLink
      secondaryText
      secondaryLink
    }
  }
  formSection {
    __typename
    title
    description
    formspreeUrl
    buttonText
  }
  whatsappBanner {
    __typename
    title
    description
    buttonText
    buttonUrl
  }
  faqSection {
    __typename
    eyebrow
    title
    faqs {
      __typename
      question
      answer
    }
  }
}
    `;
export const PostPartsFragmentDoc = gql`
    fragment PostParts on Post {
  __typename
  title
  body
}
    `;
export const HomepageDocument = gql`
    query homepage($relativePath: String!) {
  homepage(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HomepageParts
  }
}
    ${HomepagePartsFragmentDoc}`;
export const HomepageConnectionDocument = gql`
    query homepageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HomepageFilter) {
  homepageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HomepageParts
      }
    }
  }
}
    ${HomepagePartsFragmentDoc}`;
export const StorepageDocument = gql`
    query storepage($relativePath: String!) {
  storepage(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...StorepageParts
  }
}
    ${StorepagePartsFragmentDoc}`;
export const StorepageConnectionDocument = gql`
    query storepageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: StorepageFilter) {
  storepageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...StorepageParts
      }
    }
  }
}
    ${StorepagePartsFragmentDoc}`;
export const ContactpageDocument = gql`
    query contactpage($relativePath: String!) {
  contactpage(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...ContactpageParts
  }
}
    ${ContactpagePartsFragmentDoc}`;
export const ContactpageConnectionDocument = gql`
    query contactpageConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: ContactpageFilter) {
  contactpageConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...ContactpageParts
      }
    }
  }
}
    ${ContactpagePartsFragmentDoc}`;
export const PostDocument = gql`
    query post($relativePath: String!) {
  post(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PostParts
  }
}
    ${PostPartsFragmentDoc}`;
export const PostConnectionDocument = gql`
    query postConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PostFilter) {
  postConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PostParts
      }
    }
  }
}
    ${PostPartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    homepage(variables, options) {
      return requester(HomepageDocument, variables, options);
    },
    homepageConnection(variables, options) {
      return requester(HomepageConnectionDocument, variables, options);
    },
    storepage(variables, options) {
      return requester(StorepageDocument, variables, options);
    },
    storepageConnection(variables, options) {
      return requester(StorepageConnectionDocument, variables, options);
    },
    contactpage(variables, options) {
      return requester(ContactpageDocument, variables, options);
    },
    contactpageConnection(variables, options) {
      return requester(ContactpageConnectionDocument, variables, options);
    },
    post(variables, options) {
      return requester(PostDocument, variables, options);
    },
    postConnection(variables, options) {
      return requester(PostConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "http://localhost:4001/graphql",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
