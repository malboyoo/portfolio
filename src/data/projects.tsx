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
    description: "projects.runtogether",
    made: [react, node, express, sass, tailwind],
  },
  {
    title: "Kasa",
    url: "https://warm-manatee-d0851e.netlify.app/",
    github: "https://github.com/malboyoo/P7",
    img: kasaImg,
    description: "projects.kasa",
    made: [react, node, sass],
  },
  {
    title: "Piquante (API)",
    url: "",
    github: "https://github.com/malboyoo/P6-API",
    img: piquanteImg,
    description: "projects.piquante",
    made: [node, express, mongodb],
  },
  {
    title: "Kanap",
    url: "",
    github: "https://github.com/malboyoo/P5",
    img: kanapImg,
    description: "projects.kanap",
    made: [javascript, node],
  },
  {
    title: "Ohmyfood",
    url: "https://remarkable-cannoli-7036de.netlify.app/index.html",
    github: "https://github.com/malboyoo/P3",
    img: ohmyfoodImg,
    description: "projects.ohmyfood",
    made: [html, sass],
  },
];
