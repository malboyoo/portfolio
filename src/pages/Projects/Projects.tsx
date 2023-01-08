import { projects } from "../../data/projects";
import Project from "./components/Project";

function Projects() {
  return (
    <main className="flex flex-col flex-auto items-center pt-5 md:pt-0 bg-dark-1 projects">
      {projects.map((project, i) => (
        <Project {...project} index={i} key={crypto.randomUUID()} />
      ))}
    </main>
  );
}

export default Projects;
