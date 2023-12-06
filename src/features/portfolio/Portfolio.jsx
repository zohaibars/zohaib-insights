import { useEffect, useState } from "react";
import { projectsList } from "./projectsList";
import ProjectCard from "./ProjectCard";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";

export default function Portfolio() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pb-12 lg:pr-20" id="projects_page">
      <div className="mb-8 text-center" id="projects_page_intro">
        <h1 className="text-5xl mb-6">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
            idx={15}
          />
        </h1>
        <p>
          As an AI engineer, my portfolio showcases a diverse array of projects,
          underscoring my proficiency and expertise. My significant endeavors
          specifically emphasize my adeptness in navigating technologies. I take
          pride in my valuable contributions and actively pursue fresh
          opportunities that allow me to continually challenge and elevate my
          skills.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 h-full">
        {projectsList.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
    </div>
  );
}
