import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Gareth Wiebe, B.Sc | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcom to my website', // e.g: Welcome to my website
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
    "Gareth is a programmer at Manitoba Public Insurance and graduate from the University of Manitoba with a Bachelor's of Science in Computer Science.",
  paragraphTwo:
    'In university, he was involved in many projects where he learned to work with a diverse group of people. He also attended events and demonstrated his passion for computer science when he participated in the global IEEE competition and placed 3rd in Canada out of 56 teams. Working at Manitoba Public Insurance as a Programmer, Gareth gained industry-related experience on real systems as part of the Application Services team. While working for MPI, Gareth became a Certified SAFe 5 Practitioner by completing the Scaled Agile Framework exam.',
  paragraphThree:
    "Gareth's combination of teamwork ability, passion, and dedication make him a valuable member of any team. ",

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
