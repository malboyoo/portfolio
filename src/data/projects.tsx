import { ReactHTML } from "react";
import kasaImg from "../assets/images/kasa.png";

interface ProjectI {
  title: string;
  url: string;
  github: string;
  img: string;
  description: string;
  made: React.ReactElement[];
}

const react = <i className="devicon-react-original-wordmark colored block mr-3"></i>;
const sass = <i className="devicon-sass-original colored block mr-3"></i>;
const node = <i className="devicon-nodejs-plain-wordmark colored block mr-3 text-6xl"></i>;
const tailwind = <i className="devicon-tailwindcss-original-wordmark colored mr-3 text-6xl"></i>;

export const projects: ProjectI[] = [
  {
    title: "Kasa - Front-end",
    url: "https://warm-manatee-d0851e.netlify.app/",
    github: "https://github.com/malboyoo/P7",
    img: kasaImg,
    description: `The last project of certifying training from Openclassrooms. 
    It was my first experience with React 18, perfect for training the basics.`,
    made: [react, node, sass],
  },
  {
    title: "runtogether.fr - Full-stack",
    url: "https://runtogether.fr/",
    github: "https://github.com/malboyoo/runtogether-front",
    img: kasaImg,
    description: `I learned a lot with this project, having to manage all parts of the project alone was a real challenge. 
    you can have look to the front-end but for security issues the back-end will remain private (if you are recruiter you can ask an access)`,
    made: [react, node, sass, tailwind],
  },
];
