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

import Spottify from "./projectImgs/Spottify.webp";
import Kanban from "./projectImgs/kanban.webp";
import Tesla from "./projectImgs/tesla.webp";

export const personalData = [
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

const Video = ({ videoSrc }) => {
  return (
    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
      <iframe
        src={videoSrc}
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}></iframe>
    </div>
  );
};
export const freelanceData = [
  {
    name: "Spotify Clone",

    description: (
      <div>
        Next 13 ,Typescript ,TailwindCSS ,Next Auth ,Redux-Toolkit ,Lyrics
        Finder ,Intersection Observer ,
        <a href="https://www.npmjs.com/package/react-spotify-web-playback">
          React-Spotify-Web-Playback
        </a>
        <span className="ml-1">
           and Spotify API.
        </span>
      </div>
    ),
    img: Spottify,
    live: "https://spottify-test.vercel.app/",
  },
  {
    name: "Tesla Clone",
    description:
      "React ,TailwindCSS ,Vite ,Intersection Observer and Framer Motion.",
    img: Tesla,
    live: "https://tesla45.netlify.app/",

    video: (
      <Video videoSrc="https://www.loom.com/embed/a9e8fe89237741cba08d17e8928cbdfe?sid=b5dd2901-be7f-4e63-9102-c97988fa92ee" />
    ),
  },

  {
    name: "Kanban Board",
    description:
      "React ,Firebase ,Dnd-Kit ,Typescript ,React-Firebase-Hooks and SCSS.",
    img: Kanban,
    video: (
      <Video videoSrc="https://www.loom.com/embed/39255963592c4835983831585c1fc0e6?sid=023670f5-83d1-421b-b548-4c9f12a606fc" />
    ),
  },
];


export const first = `I am a self-taught web developer with a strong focus on front-end development. My determination and problem-solving skills, as well as my ability to think creatively, make me well-suited for a career in web development. In addition to my coding skills, I have a good sense of aesthetics and experience with responsive, mobile-first web design.`;

export const second = `I am a dedicated and reliable professional who is always willing to go the extra mile to ensure that my projects are completed to the highest standard. I have experience in responsive design and am committed to delivering high-quality work. Check out my portfolio to see some of my previous projects and don't hesitate to contact me if you have any questions or would like to collaborate. contact@saifosama.co`;

export const skills = [
  "React js",
  "HTML",
  "CSS",
  "Javascript",
  "TailwindCSS",
  "Framer Motion",
  "Git",
  "Redux-Toolkit",
  "Firebase",
  "Axios",
  "MUI",
  "SCSS",
  "and REST APIs",
];
export const list = ["Next js", "Ts", "SSR"];

export const secondSkills = `I'm quiet confident, naturally curious, and perpetually working on
improving my chops one design problem at a time. I guarantee a
commitment during work on your project.`;