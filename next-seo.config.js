// SEO Configuration for Freezelines Services India Pvt Ltd
export const defaultSEO = {
  title: 'Freezelines Services India Pvt Ltd | Professional HVAC Solutions',
  description: 'Leading provider of professional HVAC, chiller services, repair, and maintenance across India. Expert solutions for air conditioning, heating, and cooling systems with 24/7 emergency service.',
  canonical: 'https://www.freezelinesservices.com',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.freezelinesservices.com',
    siteName: 'Freezelines Services India Pvt Ltd',
    title: 'Freezelines Services India Pvt Ltd | Professional HVAC Solutions',
    description: 'Leading provider of professional HVAC, chiller services, repair, and maintenance across India. Expert solutions for air conditioning, heating, and cooling systems with 24/7 emergency service.',
    images: [
      {
        url: 'https://www.freezelinesservices.com/logo-freezelines.svg',
        width: 1200,
        height: 630,
        alt: 'Freezelines Services India Pvt Ltd Logo',
      },
    ],
  },
  twitter: {
    handle: '@freezelines',
    site: '@freezelines',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'application-name',
      content: 'Freezelines Services',
    },
    {
      name: 'msapplication-TileColor',
      content: '#2B5797',
    },
    {
      name: 'theme-color',
      content: '#ffffff',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.png',
    },
    {
      rel: 'apple-touch-icon',
      href: '/favicon.png',
      sizes: '76x76',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
};

export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.freezelinesservices.com/#business',
  name: 'Freezelines Services India Pvt Ltd',
  alternateName: 'Freezelines Services',
  description: 'Professional HVAC, chiller services, repair, and maintenance across India',
  url: 'https://www.freezelinesservices.com',
  logo: 'https://www.freezelinesservices.com/logo-freezelines.svg',
  image: 'https://www.freezelinesservices.com/logo-freezelines.svg',
  telephone: '+91 7798486823',
  email: 'customersupport@freezelinesservices.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Orchid Square',
    addressLocality: 'Thane',
    addressRegion: 'Maharashtra',
    postalCode: '400601',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 19.2183,
    longitude: 72.9781,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  priceRange: '$$',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Credit Card, Bank Transfer',
  serviceArea: {
    '@type': 'Country',
    name: 'India',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'HVAC Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Chiller Maintenance & Repair',
          description: 'Professional chiller maintenance and repair services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Air Conditioning Installation',
          description: 'Expert air conditioning installation services',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'HVAC System Maintenance',
          description: 'Comprehensive HVAC system maintenance',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Emergency HVAC Repair',
          description: '24/7 emergency HVAC repair services',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '156',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://www.facebook.com/freezelinesservices',
    'https://www.linkedin.com/company/freezelinesservices',
    'https://twitter.com/freezelines',
  ],
};
