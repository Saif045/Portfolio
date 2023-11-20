import netflix from "./projectImgs/netflix.webp";
import foods from "./projectImgs/foods.webp";
import rreact from "./projectImgs/React.webp";
import room from "./projectImgs/room.webp";
import SunnySide from "./projectImgs/SunnySide.webp";
import Spotify from "./projectImgs/Spotify.webp";
import Chat from "./projectImgs/Chat.webp";
import messenger from "./projectImgs/messenger.webp";
import twitter from "./projectImgs/twitter.webp";
import airbnb from "./projectImgs/airbnb.webp";
import agency from "./projectImgs/agency.webp";
import deplace from "./projectImgs/deplace.webp";

import Spottify from "./projectImgs/spottify.webp";
import Kanban from "./projectImgs/kanban.webp";
import Tesla from "./projectImgs/tesla.webp";

export const personalData = [
  {
    name: "Deplace",
    description:
      "Next 13 ,Typescript ,TailwindCSS ,Framer-motion ,react-fast-marquee",
    img: deplace,
    code: "https://github.com/Saif045/deplace",
    live: "https://deplace-45.vercel.app/",
  },
  {
    name: "Agency",
    description: "Next 13 ,Typescript ,TailwindCSS ,Gsap ,Framer-motiom ,sass",
    img: agency,
    code: "https://github.com/Saif045/agency",
    live: "https://agency-45.vercel.app/",
  },
  {
    name: "Airbnb Clone",
    description:
      "Next 13 ,Typescript ,TailwindCSS ,Prisma ,MongoDb ,Next Auth ,Cloudinary ,Zustand.",
    img: airbnb,
    code: "https://github.com/Saif045/airbnb",
    live: "https://airnbn45.vercel.app/",
  },
  {
    name: "Messenger Clone",
    description:
      "Next 13 ,Typescript ,TailwindCSS ,Prisma ,Pusher ,MongoDb ,Next Auth ,Zustand ,Headlessui.",
    img: messenger,
    code: "https://github.com/Saif045/messenger45",
    live: "https://messenger45.vercel.app/",
  },
  {
    name: "Twitter Clone",
    description:
      "Next 13 ,Typescript ,TailwindCSS ,Prisma ,MongoDb ,Next Auth ,Zustand.",
    img: twitter,
    code: "https://github.com/Saif045/twitter",
    live: "https://twi-tter-45.vercel.app/",
  },

  {
    name: "Netflix Clone",
    description: "React ,TailwindCSS ,Vite and (TMDB) API.",
    img: netflix,
    code: "https://github.com/Saif045/Netflix",
    live: "https://netflix-clone45.netlify.app/",
  },
  {
    name: "Spotify Clone",
    description: "React ,TailwindCSS ,Vite ,Redux-Toolkit and Shazam API.",
    img: Spotify,
    code: "https://github.com/Saif045/Spotify",
    live: "https://spotify45.netlify.app/",
  },
  //
  {
    name: "ChatApp",
    description:
      "React ,Vite ,Firebase ,MUI for login & signup and SCSS for chat.",
    img: Chat,
    code: "https://github.com/Saif045/ChatApp",
    live: "https://chatapp45.netlify.app/",
  },
  //
  {
    name: "React.",
    description: "React ,TailwindCSS ,Vite and Framer Motion",
    img: rreact,
    code: "https://github.com/Saif045/React45",
    live: "https://react45.netlify.app/",
  },
  {
    name: "SunnySide",
    description:
      "React ,TailwindCSS ,Vite ,Framer Motion and Design Form Front-end Mentor",
    img: SunnySide,
    code: "https://github.com/Saif045/sunny-side",
    live: "https://sunny-side45.netlify.app/",
  },
  {
    name: "Room.",
    description:
      "React ,TailwindCSS ,Vite ,Framer Motion and Design Form Front-end Mentor",
    img: room,
    code: "https://github.com/Saif045/room",
    live: "https://room45.netlify.app/",
  },
  {
    name: "Best Eats",
    description: "React ,Vite and TailwindCSS",
    img: foods,
    code: "https://github.com/Saif045/Best-Eats",
    live: "https://best-eats45.netlify.app/",
  },
];


export const first = `I am a self-taught web developer with a strong focus on front-end development. My determination and problem-solving skills, as well as my ability to think creatively, make me well-suited for a career in web development. In addition to my coding skills, I have a good sense of aesthetics and experience with responsive, mobile-first web design.`;

export const second = `I am a dedicated and reliable professional who is always willing to go the extra mile to ensure that my projects are completed to the highest standard. I have experience in responsive design and am committed to delivering high-quality work. Check out my portfolio to see some of my previous projects and don't hesitate to contact me if you have any questions or would like to collaborate. contact@saifosama.co`;

export const skills = [
  "React js",
  "Next js",
  "HTML",
  "CSS",
  "Typescript",
  "Javascript",
  "Next Auth",
  "Prisma",
  "TailwindCSS",
  "Framer Motion",
  "Git",
  "Redux-Toolkit",
  "Firebase",
  "Axios",
  "MUI",
  "SCSS",
  "REST APIs",
  "Dnd-Kit",
  "Pusher",
  "MongoDb",
  "Zustand",
  "Cloudinary",
  "Headlessui.",
];
export const list = ["DSA", "& Building Projects"];

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faGear,
  faBusinessTime,
} from "@fortawesome/free-solid-svg-icons";

export const navsocials = [
  { to: "https://github.com/Saif045", name: "Github", icon: faGithub },
  {
    to: "https://www.linkedin.com/in/saif-osama",
    name: "Linkedin",
    icon: faLinkedin,
  },
];

export const navData = [
  { to: "/", name: "Home", icon: faHome },
  { to: "/contact", name: "Contact", icon: faEnvelope },
  { to: "/about", name: "About", icon: faUser },
  {
    to: "/personal-projects",
    name: "Personal Projects",
    icon: faSuitcase,
  },

  { to: "/skills", name: "Skills", icon: faGear },
];
