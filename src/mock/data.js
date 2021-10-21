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
  name: 'Gareth Wiebe',
  subtitle: 'B.Sc, Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Gareth is a graduate from the University of Manitoba with a Bachelor's of Science in Computer Science.",
  paragraphTwo:
    " His ability to work in groups was proven at university when he joined a team of 8 to develop a React applicaiton for Winnipeg. He has demonstrated his passion for tackling hard problems by placing 3rd in Canada in the global IEEE programming competition. Gareth's dedication to his area was shown when he took every undergraduate computer science class available until he hit the maximum he was permitted to take.",
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
