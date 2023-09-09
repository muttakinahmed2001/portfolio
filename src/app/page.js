import Skills from "@/components/Skills";
import Image from "next/image";
import React from "react";
import profile from "public/HeadShot.png";
import Link from "next/link";
import TypeAnimation from "@/components/TypeAnimation";
import About from "@/components/About";
import Contact from "@/components/Contact";

const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col-reverse sm:flex-row  justify-between items-center mt-20">
        <div>
          <p className="text-xl mb-3 mt-3">Hi, My name is</p>{" "}
          <h1 className="text-3xl sm:text-5xl font-bold">Muttakin Ahmed</h1>
          <div className="flex gap-2 mt-2">
            <h3 className="text-[18px] sm:text-3xl mt-3"> I am a</h3>
            <h3 className="text-[18px] sm:text-3xl mt-3 text-green-500">
              <TypeAnimation></TypeAnimation>
            </h3>
          </div>
          <button className="btn btn-accent mt-5 inline me-3">
            <Link href="https://docs.google.com/document/d/1PHNCxOfIpQ1szXWxm6s2fqhoCtedFtpSpSVLXUcRtCw/edit?usp=drive_link">
              Resume
            </Link>
          </button>
          <button className="btn btn-outline btn-accent ">
            <Link href="#contact-section">Contact</Link>
          </button>
        </div>
        <div className="w-[200px] h-[200px]  sm:w-[400px] sm:h-[400px] ">
          <Image src={profile} alt="Men"></Image>
        </div>
      </div>
      <About></About>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
};

export default HomePage;
