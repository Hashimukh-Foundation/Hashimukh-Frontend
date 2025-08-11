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
        "Building on our mission to support local communities, the Hashimukh Foundation held a medical camp focused on eye care at Elashin, Delduar, Tangail on June 3, 2025. Our team, with the help of dedicated volunteers, provided free eye exams and treatment to the community. During the five-hour camp, we were able to test the vision of over 60 people. Of those, 27 individuals received free prescription glasses, and others were given necessary medication. It was a privilege to offer these services completely free of charge. A huge thank you to everyone who made this initiative a success. We're excited to continue our work providing accessible healthcare and vision care to those in need.",
    },
    {
      imgSrc: cardBG3,
      title: "Self Reliant Project",
      description:
        "Project Self-Reliant is a noble initiative aimed at empowering poor families by providing them with a pair of goats that can eventually produce more goats, thereby generating a source of income for the family. However as with any project, there are rules and conditions that must be followed to ensure its sustainability. In this blog post, we'll explore a recent incident involving Project Self-Reliant and how it highlights the importance of balancing compassion and accountability.",
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
