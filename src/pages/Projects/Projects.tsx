import { projects } from "../../data/projects";
import Project from "./components/Project";
import { generateUUID } from "../../utils/uuid";

function Projects() {
  return (
    <main className="flex flex-col flex-auto items-center pt-5 md:pt-0 bg-dark-1">
      {projects.map((project, i) => (
        <Project {...project} index={i} key={generateUUID()} />
      ))}
    </main>
  );
}

export default Projects;
