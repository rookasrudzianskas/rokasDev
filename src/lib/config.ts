// eslint-disable-next-line import/prefer-default-export
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL;
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const SOCIALS: { [k: string]: string } = {
  Youtube: 'https://www.youtube.com/c/RokasRudzianskas',
  LinkedIn: 'https://www.linkedin.com/in/rokasrudzianskas/',
  Twitter: 'https://twitter.com/byRookas',
  Instagram: 'https://www.instagram.com/byRookas/',
};

export const CONVERTKIT = {
  FORM_SRC: process.env.NEXT_PUBLIC_CONVERTKIT_FORM_SRC,
  FORM_ID: process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID,
  subscribers: 18215,
  subscribersUpdatedOn: '2022-03-21',
  averageNewSubscribersPerDay: 50,
};

export const SEO = {
  title: 'byRookas Development',
  description:
    'Building awesome stuff from scratch, learn React, React Native, AWS Amplify and other modern technologies that power WEB and Mobile',
  author: 'Rokas Rudzianskas',
  keywords: 'React Native, React, Typescript, AWS Amplify',
  hostname: 'https://www.byrookas.dev',
  image: '/images/rokas.jpg',
  twitter: '@byrookas',
};
