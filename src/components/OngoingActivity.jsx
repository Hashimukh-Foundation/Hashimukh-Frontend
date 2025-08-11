import React from "react";
import OngoingProjectCard from "./OngoingProjectCard.jsx";
import cardBG from "../assets/cardBG.jpg";
import cardBG3 from "../assets/cardBG3.jpg";

const OngoingActivity = () => {
  const projects = [
    {
      imgSrc: cardBG,
      title: "Medical Eye Camp 2025",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form...",
    },
    {
      imgSrc: cardBG3,
      title: "Self Reliance Project",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form...",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center h-[90%]">
      <h1 className="text-4xl sm:text-5xl font-bold m-7">Ongoing Activities</h1>
      <div className="flex flex-col md:flex-row mb-12 gap-6">
        {projects.map((project, index) => (
          <OngoingProjectCard
            key={index}
            imgSrc={project.imgSrc}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default OngoingActivity;
