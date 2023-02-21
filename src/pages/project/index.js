import { GrGithub } from 'react-icons/gr'
import { TbWorld } from 'react-icons/tb'
import {
 pokemonImage,
 resturauntImage,
 conferenceWebsite,
 pavoWebsite,
 dmWebsite,
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
      'Twitter clone but can edit tweets.',
    stack: 'NextJS TailwindCss FireStore Next-auth',
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
    desc: 'A pair programming web code editor',
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
    desc: 'Created E-commerce webapp with the MERN stack',
    stack: 'MERN stack(MongoDB, Express, React, Node.js), React-Bootstrap , Redux.',
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
    name: 'GP',
    desc: ' Powerful Digital Solutions With Gp. ',
    stack: 'HTML,CSS,JS,Bootstrap',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Harshit-Dandriyal/GP',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://projectgp-createdbyharshit.netlify.app/',
    },
    imgUrl: dmWebsite,
  },

    {
    id: 5,
    name: 'Resturant Website',
    desc: ' Enjoy Your Healthy Delicious Food ',
    stack: 'HTML,CSS,JS,Bootstrap',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Harshit-Dandriyal/RestaurantClient',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://restaurantwebsite-createdbyharshit.netlify.app/',
    },
    imgUrl: resturauntImage,
  },


     {
    id: 6,
    name: 'Pavo',
    desc: ' Team management mobile application',
    stack: 'HTML,CSS,JS,Bootstrap',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Harshit-Dandriyal/MobileApp',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://pavoapp-createdbyharshit.netlify.app/',
    },
    imgUrl: pavoWebsite,
  },

  {
    id: 7,
    name: 'The Event',
    desc: 'THE ANNUAL MARKETING CONFERENCE',
    stack: 'HTML,CSS,JS,Bootstrap',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/Harshit-Dandriyal/Event-Website',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://theevent-createdbyharshit.netlify.app/',
    },
    imgUrl: conferenceWebsite,
  },
  {
    id: 8,
    name: 'Pokemon Website',
    desc: ' Here you can fetch the Pokemon details ',
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
