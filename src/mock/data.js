import {
  nanoid
} from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sean Chan', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'You can call me DcChan', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Sean Chan',
  subtitle: `I'm a Software Developer`,
  cta: 'Continue',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.google.com', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [{
    id: nanoid(),
    img: 'projects/fury-fitness.png',
    title: 'Fury-Fitness',
    info: '',
    info2: '',
    url: 'https://fury-fitness.netlify.app',
    repo: 'https://github.com/dcchan98/Fury_Fitness', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/projects2000.png',
    title: 'Landing Page for Projects 2000',
    info: '',
    info2: '',
    url: 'https://projects2000.netlify.app/',
    repo: 'https://github.com/dcchan98/Project2000_Brownfield', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/nus-proposal.png',
    title: 'Proposal of Landing Page for NUS analytics',
    info: '',
    info2: '',
    url: 'https://data-at-nus-proposal.netlify.app',
    repo: 'https://github.com/dcchan98/Bootstrap-Datavis-NUS', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/McGymmy.png',
    title: 'McGymmy',
    info: '',
    info2: '',
    url: 'https://ay2021s1-cs2103t-w17-3.github.io/tp/',
    repo: 'https://github.com/AY2021S1-CS2103T-W17-3/tp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/titanic.png',
    title: 'End to End Machine Learning Titanic Prediction',
    info: '',
    info2: '',
    url: 'https://www.kaggle.com/seanchandingchao/titanic-project',
  },
  {
    id: nanoid(),
    img: 'projects/cp4.png',
    title: 'Tutor for Data Structures and Algorithms (CS2040) at NUS (Aug 2020 to Dec 2020)',
    info: '',
    info2: '',
    url: 'https://visualgo.net/en',
  },

];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email Me',
  email: 'dcchan98@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [{
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/seanchan.co/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/dcchan98',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/dcchan98',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};