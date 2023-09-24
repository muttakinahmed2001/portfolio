import Link from "next/link";
import React from "react";

const Portfolio = () => {
  const projects = [
    {
      img1: "/projects/learnLanguage.png",
      img2: "",
      img3: "",
      title: "Learn Language",
      liveLink: "https://assignment-12-72344.web.app/",
      gitClient:
        "https://github.chttps://github.com/muttakinahmed2001/summer-camp-clientom/programming-hero-web-course1/b712-summer-camp-client-side-muttakinahmed2001",
      gitServer: "https://github.com/muttakinahmed2001/summer-camp-server",
      details: "",
      features: {
        feature1: "",
        feature2: "",
        feature3: "",
      },
      id: 1,
    },
    {
      img1: "/projects/kidsSports.png",
      img2: "",
      img3: "",
      title: "Kids Sports",
      liveLink: "https://assignment-11-468db.web.app/",
      gitClient: "https://github.com/muttakinahmed2001/kids-sports-client",
      gitServer: "https://github.com/muttakinahmed2001/kids-sports-server",
      details: "",
      features: {
        feature1: "",
        feature2: "",
        feature3: "",
      },
      id: 2,
    },
    {
      img1: "/projects/bengaliFoods.png",
      img2: "",
      img3: "",
      title: "Bengali Foods",
      liveLink: "https://assignment-10-1ce33.web.app/",
      gitClient: "https://github.com/muttakinahmed2001/bengali-foods-client",
      gitServer: "https://github.com/muttakinahmed2001/bengali-foods-server",
      details: "",
      features: {
        feature1: "",
        feature2: "",
        feature3: "",
      },
      id: 3,
    },
  ];

  return (
    <div className="grid   sm:grid-cols-3 gap-10 container max-w-screen-xl mx-auto px-5 text-black">
      {projects.map((project, index) => (
        <div
          key={index}
          className="mt-5 text-center flex flex-col justify-center items-center">
          <h1 className="text-3xl my-3">{project.title}</h1>
          <div className="flex gap-3">
            <Link href={project.liveLink}>
              <button className="live btn btn-outline btn-primary">
                Live Link
              </button>
            </Link>
            <Link href={project.gitClient}>
              <button className="btn btn-outline btn-secondary">
                GitHub Client
              </button>
            </Link>
            <Link href={project.gitServer}>
              <button className="btn btn-outline btn-accent">
                GitHub Server
              </button>
            </Link>
          </div>
          <Link href={`/portfolio/${project.id}`}>
            {" "}
            <button className="btn btn-info my-3">View Details</button>
          </Link>{" "}
          <div
            style={{ backgroundImage: `url(${project.img1})` }}
            className="imgContainer mt-10"></div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
