import kasaImg from "../assets/images/kasa.png";
import runtogetherImg from "../assets/images/runtogether.png";
import piquanteImg from "../assets/images/piquante.png";
import kanapImg from "../assets/images/kanap.png";
import ohmyfoodImg from "../assets/images/ohmyfood.png";

interface ProjectI {
  title: string;
  url: string;
  github: string;
  img: string;
  description: string;
  made: React.ReactElement[];
}

const react = <i className="devicon-react-original-wordmark colored block" title="ReactJS"></i>;
const sass = <i className="devicon-sass-original colored block" title="Sass"></i>;
const node = <i className="devicon-nodejs-plain-wordmark colored block text-6xl" title="NodeJS"></i>;
const tailwind = <i className="devicon-tailwindcss-original-wordmark colored block text-7xl" title="TailwindCSS"></i>;
const express = <i className="devicon-express-original-wordmark block text-6xl" title="Express"></i>;
const mongodb = <i className="devicon-mongodb-plain-wordmark colored block" title="MongoDB"></i>;
const javascript = <i className="devicon-javascript-plain colored block" title="Javascript"></i>;
const html = <i className="devicon-html5-plain-wordmark colored block" title="html"></i>;

export const projects: ProjectI[] = [
  {
    title: "runtogether.fr",
    url: "https://runtogether.fr/",
    github: "https://github.com/malboyoo/runtogether-front",
    img: runtogetherImg,
    description: `My first personal full-stack project, was a real challenge as I had to manage all aspects of the project on my own. 
    This outdoor running activities planner allows users to plan their running activities with their friends. 
    If you are interested, you can view the features and code in the Github repository.`,
    made: [react, node, express, sass, tailwind],
  },
  {
    title: "Kasa",
    url: "https://warm-manatee-d0851e.netlify.app/",
    github: "https://github.com/malboyoo/P7",
    img: kasaImg,
    description: `The last project of certifying training from Openclassrooms.
    It was my first experience with React 18, which was perfect for learning the fundamentals.`,
    made: [react, node, sass],
  },
  {
    title: "Piquante (API)",
    url: "",
    github: "https://github.com/malboyoo/P6-API",
    img: piquanteImg,
    description: `My first back-end project as part of my certification training from Openclassrooms.
    I learned a lot of new things and had a great time understanding all the parts of an API.
    I really enjoyed the development process of this project.
    `,
    made: [node, express, mongodb],
  },
  {
    title: "Kanap",
    url: "",
    github: "https://github.com/malboyoo/P5",
    img: kanapImg,
    description: `Project 5 of the certifying training from Openclassrooms, 
    which focused on using vanilla JavaScript to interact with APIs, manage a cart, and handle input errors.
    `,
    made: [javascript, node],
  },
  {
    title: "Ohmyfood",
    url: "https://remarkable-cannoli-7036de.netlify.app/index.html",
    github: "https://github.com/malboyoo/P3",
    img: ohmyfoodImg,
    description: `Project 3 certifying training from Openclassrooms, which focused on mobile-first design and advanced CSS animation. 
    I learned a lot about CSS during this course and feel confident in my skills in this area.`,
    made: [html, sass],
  },
];
