import { projects } from "../../data/projects";
import Project from "./components/Project";

function Projects() {
  return (
    <main className="flex flex-col flex-auto items-center bg-dark-2">
      {projects.map((project, i) => (
        <Project {...project} index={i} key={crypto.randomUUID()} />
      ))}
    </main>
  );
}

export default Projects;
