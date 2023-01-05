import { projects } from "../../data/projects";
import Project from "./components/Project";
import { useState } from "react";

function Projects() {
  const [index, setIndex] = useState(0);

  const handleClickNext = () => {
    if (projects.length > index + 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const handleClickPrevious = () => {
    if (index !== 0) {
      setIndex(index - 1);
    } else {
      setIndex(projects.length - 1);
    }
  };

  return (
    <main className="flex flex-col flex-auto py-5 px-10 md:px-14 items-center bg-dark-2">
      <nav className="flex flex-row justify-between w-full text-xl">
        {projects.length !== 1 && (
          <button className="" onClick={handleClickPrevious}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
        )}
        <h1 className="codeArea bg-code px-4 py-2 rounded-md text-xl text-variable">{projects[index].title}</h1>
        {projects.length !== 1 && (
          <button className="" onClick={handleClickNext}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        )}
      </nav>

      <div className="flex-row">{projects.map((project, i) => (i === index ? <Project {...project} /> : ""))}</div>
    </main>
  );
}

export default Projects;
