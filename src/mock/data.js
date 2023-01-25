import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Gareth Wiebe, B.Sc | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Gareth Wiebe Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Gareth Wiebe, B.Sc',
  subtitle: 'Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile3.jpg',
  paragraphOne:
    "I have a Bachelor's of Science in Computer Science from the University of Manitoba and currently work as a developer for Manitoba Public Insurance.",
  paragraphTwo:
    'I have been part of the insurance team for some time, providing maintenance, on-call assistance, and developing integrations for a new project',
  paragraphThree: 'In my free moments, I find Improv to be a favorite pastime.',

  resume: 'index.js', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'movie-app.jpg',
    title: 'Movie Browser',
    info: 'This is a movie app that lets you search for movies and choose your favourites. It is built with React and hosted on Vercel.',
    info2: 'Technologies Used: ',
    info2List: ['React', 'Vercel', 'Bootstrap'],
    url: 'https://movie-app-alpha-blush.vercel.app/',
    repo: 'https://github.com/GarethLW/movie-app', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'garethwiebe@hotmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/gareth-wiebe/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/GarethLW',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
