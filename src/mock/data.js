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
  paragraphOne: `About me (🤓  edition) :
  I enjoy creating and building applications as well as learning about technology. 
  My geeky interest includes but is not exhausted to machine learning, software 
  development, system design, data structures and algorithms and just a little bit of math 
  ...keyword a bit! `,
  paragraphTwo: `About me (😎 edition): 
  Apart from nerdy pursuits, I have many other interest too! One thing I really 
  enjoy is teaching. The satisfaction you gain when you helped someone understand a 
  difficult concept is second to none. Apart from that, I am also a fitness enthusiast 
  (I LOVE BASKETBALL) as well as a tech junkie. (Apple fanboy). Oh and one thing, I can't sing but 
  I love singing. (all my friends know this REALLY WELL)`,
  paragraphThree: `From my projects below, you can check out my personal projects as well as ventures! 
  You may notice that most of my projects are in line with my interest and pursuits. One thing I love 
  about software engineering is it's flexibility and ability to add value in any relevant fields. Because of this,
  I am genuinely happy and thankful to be in this field where they call "Computer Science".  `,
  resume: 'https://docs.google.com/document/d/1CzikEOydJLc7g3Ix2C_srcnz-8xY-J0BYC8AVMKjHCI/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [{
    id: nanoid(),
    img: 'projects/fury-fitness.png',
    title: 'Fury-Fitness',
    info: `Solo project to experience the architecture of e-commerce site. Made a personal training 
    site for a fictional but popular client , Nick Fury who gathered the Avengers, our favourite 
    superheroes who are now working as personal trainers to help mortals like us get healthier, lose
    weight and build some muscles💪🏻.`,
    info2: 'Major Technologies Used: React, Redux, Firebase, Bootstrap. (not exhaustive)',
    url: 'https://fury-fitness.netlify.app',
    repo: 'https://github.com/dcchan98/Fury_Fitness', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/projects2000.png',
    title: 'Landing Page for Projects 2000',
    info: `Solo project to create a simple landing page for my dad. Aim of this project was 
    to try out a library MaterializeCss as well as practice creating an creating a front end 
    layout with time constraint (One day build).`,
    info2: 'Major Technologies Used: HTML , CSS , MaterializeCss , Sass, Jquery',
    url: 'https://projects2000.netlify.app/',
    repo: 'https://github.com/dcchan98/Project2000_Brownfield', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/nus-proposal.png',
    title: 'Proposal of Landing Page for NUS analytics',
    info: `Solo project to help create a landing page for a venture for NUS business analytics. 
    Design was not adopted in the end but had a lot of fun creating this layout as well as deepened 
    my familiarity with Bootstrap.`,
    info2: 'Major Technologies Used: HTML , CSS , Bootstrap ',
    url: 'https://data-at-nus-proposal.netlify.app',
    repo: 'https://github.com/dcchan98/Bootstrap-Datavis-NUS', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/McGymmy.png',
    title: 'McGymmy',
    info: `School group project with a team of 5 to create a caloric tracker app. Application was simple 
    and no features that have a WOW factor but the intention was to get used to being in an agile software
    engineering environment where we had to push new iterations every 2 weeks. Emphasis was placed on code 
    quality as well as software engineering principles where we focused less on quantity of features but instead
    bug free and error handled features. Also, we handled most of our changes through github by requesting pull 
    request as well as reviewed each other's code. We adopted the "forking workflow" which improved the
    stability of our application due to the stringent version control process. Project was completed with user and
    developer guides which are linked below as well as an "About us" team page.`,
    info2: `Major Technologies Used: Java, JavaFx, plantUML, Jackson, JUNIT5,Apache commons CLI, Jfoenix (not exhaustive)`,
    url: 'https://ay2021s1-cs2103t-w17-3.github.io/tp/',
    repo: 'https://github.com/AY2021S1-CS2103T-W17-3/tp', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'projects/titanic.png',
    title: 'End to End Machine Learning Titanic Prediction',
    info: `Solo project done solely out of interest of machine learning. Intention was to experience the full 
    data pipeline process of handling data and getting valuable information from it using pre-built machine
    learning libraries. I still feel amazed at how one could deploy and integrate machine learning even without
    fully learning about the intricacies of the algorithms.`,
    info2: `Major Technologies Used: Python, Numpy and Pandas (for data cleaning), MatPlotLib (data exploration), scikit-learn(algorithm and optimisation)`,
    url: 'https://www.kaggle.com/seanchandingchao/titanic-project',
  },
  {
    id: nanoid(),
    img: 'projects/cp4.png',
    title: 'Tutor for Data Structures and Algorithms (CS2040) at NUS (Aug 2020 to Dec 2020)',
    info: `Assisted Professor Tan Sun Teck in teaching a data structures and algorithms module. Major responsibilites
    includes holding weekly lessons where I had to teach DS & A concepts as well as hold a live coding session that aims 
    to solve a question in a given time complexity. Assisted in marking assignments every fortnightly and creating
    lesson materials with the fellow tutors. Gave consultations to struggling students from time to time and also 
     Conducted invigilation during exam sessions. `,
    info2: `Major Technologies Used: Java (Assignments and live coding were in Java but lesson was mostly taught explaining using pseudocode)`,
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
      url: 'https://www.instagram.com/dcchan98/',
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
