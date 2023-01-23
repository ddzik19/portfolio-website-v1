import React from "react";
import Card from "../components/card";
import FadeInSection from "../components/fade-in-section";
import { projects } from "../database/projects";

const ProjectGallery = () => {
  const displayProjects = () => {
    const components = [];
    projects.map((value, index) => {
      return components.push(
        <Card
          key={index}
          image={value.image}
          alt={value.alt}
          href={value.href}
        />
      );
    });
    return components;
  };
  return (
    <FadeInSection>
      <p className="text-white font-semibold text-center text-[40px] pt-[100px] pb-[50px]">My Work</p>
      <div className="mx-10 lg:mx-auto lg:w-fit" id="my-work">{displayProjects()}</div>
    </FadeInSection>
  );
};

export default ProjectGallery;
