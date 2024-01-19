import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = ({ params }) => {
  console.log(params.id);
  const id = parseInt(params.id);
  const projects = [
    {
      id: 1,
      img1: "/projects/learnLanguage.png",
      img2: "/projects/learnLanguage2.png",
      img3: "/projects/learnLanguage3.png",

      title: "Learn Language",
      liveLink: "https://assignment-12-72344.web.app/",
      gitClient: "https://github.com/muttakinahmed2001/summer-camp-client",
      gitServer: "https://github.com/muttakinahmed2001/summer-camp-server",
      details:
        "A MERN Stack project for a Summer Camp School Website. A platform for learners to discover, enroll, and pay for courses, while instructors and admins have versatile control.",
      features: [
        {
          description:
            "Users can discover various language courses and access instructor profiles.",
        },
        {
          description:
            "Seamless enrollment process with secure payment integration for course registration.",
        },
        {
          description:
            "Users, instructors, and admins seamlessly handle enrollment, approvals, and oversight.",
        },
      ],
    },
    {
      id: 2,
      img1: "/projects/kidsSports.png",
      img2: "/projects/kidsSports2.png",
      img3: "/projects/kidsSports3.png",

      title: "Kids Sports",
      liveLink: "https://assignment-11-468db.web.app/",
      gitClient: "https://github.com/muttakinahmed2001/kids-sports-client",
      gitServer: "https://github.com/muttakinahmed2001/kids-sports-server",
      details:
        "A  MERN Stack project of an E-Commerce Website for exploring categorised toys and authenticated users have diverse control.",
      features: [
        {
          description: "Discover a variety of toys, organised by categories.",
        },
        {
          description:
            "Authenticated users can seamlessly contribute by adding new toys via a dedicated post-login route.",
        },
        {
          description:
            "Access a personalised “My Toys” route to view the toys they’ve added, while a public “All Toys” route showcases the complete collection for all visitors.",
        },
      ],
    },
    {
      id: 3,
      img1: "/projects/bengaliFoods.png",
      img2: "/projects/bengaliFoods2.png",
      img3: "/projects/bengaliFoods3.png",

      title: "Bengali Foods",
      liveLink: "https://assignment-10-1ce33.web.app/",
      gitClient: "https://github.com/muttakinahmed2001/bengali-foods-client",
      gitServer: "https://github.com/muttakinahmed2001/bengali-foods-server",
      details:
        "A dynamic frontend project showcasing Bengali food recipes, along with profiles of six renowned chefs and their best dishes.",
      features: [
        {
          description:
            "Explore profiles of six well-known chefs and their signature Bengali recipes.",
        },
        {
          description: "Discover the best recipes from each chef.",
        },
        {
          description:
            "Delve into the rich culinary heritage of Bengal through a visually appealing presentation.",
        },
      ],
    },
  ];

  const selectedProject = projects.find((project) => project.id === id);

  return (
    <>
      <h1 className="text-3xl text-center my-5 font-bold">
        Details about {selectedProject.title}{" "}
      </h1>
      <div className="flex flex-col sm:flex-row items-center gap-10">
        <div className="flex-1">
          <p className="font-semibold">{selectedProject.details}</p>
          <div className="flex gap-3 mt-5">
            <Link href={selectedProject.liveLink}>
              <button className="live btn btn-outline btn-primary">
                Live Link
              </button>
            </Link>
            <Link href={selectedProject.gitClient}>
              <button className="btn btn-outline btn-secondary">
                GitHub Client
              </button>
            </Link>
            <Link href={selectedProject.gitServer}>
              <button className="btn btn-outline btn-accent">
                GitHub Server
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-xl font-bold">Features</h1>
          <ol type="1">
            {selectedProject.features.map((feature, index) => (
              <li className="mt-3 font-semibold" key={index}>
                $ {feature.description}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div>
        <div className="flex flex-col sm:flex-row gap-10 mt-10">
          <div
            style={{ backgroundImage: `url(${selectedProject.img1})` }}
            className="imgContainer"></div>
          <div
            style={{ backgroundImage: `url(${selectedProject.img2})` }}
            className="imgContainer"></div>
          <div
            style={{ backgroundImage: `url(${selectedProject.img3})` }}
            className="imgContainer"></div>
        </div>
      </div>
    </>
  );
};

export default Project;
