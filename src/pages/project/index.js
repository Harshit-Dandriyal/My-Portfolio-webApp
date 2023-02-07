import { GrGithub } from 'react-icons/gr'
import { TbWorld } from 'react-icons/tb'

import {
 pokemonImage,
 bigCommerce,
 codePairImage,
  twitterClone
} from '../../assets/images'

// projects data
export const projects = [
  {
    id: 1,
    name: 'Better Twitter ',
    desc:
      'Created a platform where users can post and explore the post of other users, and has a functionality of liking and commenting on post.',
    stack: 'NextJS, TailwindCss, RecoilJS, FireStore, Next-auth',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Harshit-Dandriyal/Better-Twitter',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://better-twitter.vercel.app/',
    },
    imgUrl: twitterClone,
  },
  {
    id: 2,
    name: `Code-Pair (Let's Code Together)`,
    desc: 'Created a collaborative development platform for front-end designers and developers where you can build and deploy a website.',
    stack: 'ReactJS,CSS, Socket.io, NodeJS, Express',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Harshit-Dandriyal/CodePair-frontEnd',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://codepair.up.railway.app/',
    },
    imgUrl: codePairImage,
  },
  {
    id: 3,
    name: 'BigCommerce',
    desc: 'Created E-commerce webapp with the MERN stack and its components (MongoDB, Express, React, Node.js)',
    stack: 'MERN stack(MongoDB, Express, React, Node.js), React-Bootstrap for styling, Redux for state-management.',
    imgUrl: bigCommerce,

    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Almarex-Web-Dev/OpenAI-project',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://gpt3-openai-project.netlify.app/',
    },
  },
  {
    id: 4,
    name: 'Pokemon Website',
    desc: ' Here you can fetch the Pokemon details or their characteristics through this API and you can make a fun project using this. Make different cards for each Pokemon and in each card show their pictures, their names, etc. ',
    stack: 'React js, SCSS',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Harshit-Dandriyal/Pokemon-viewer',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://huddle-website-project.netlify.app/',
    },
    imgUrl: pokemonImage,
  },
]
