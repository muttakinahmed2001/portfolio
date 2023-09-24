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
      <div className="flex flex-col-reverse sm:flex-row  justify-center items-center mt-20 ">
        <div className="flex-1 ps-5 text-black">
          <p className="text-xl mb-3 mt-3">Hi, My name is</p>{" "}
          <h1 className="text-3xl sm:text-5xl font-bold">Muttakin Ahmed</h1>
          <div className="flex gap-2 mt-2">
            <h3 className="text-[18px] sm:text-3xl mt-3"> I am a</h3>
            <h3 className="text-[18px] sm:text-3xl mt-3 text-green-500">
              <TypeAnimation></TypeAnimation>
            </h3>
          </div>
          <button className="btn btn-accent mt-5 inline me-3">
            <Link href="https://drive.google.com/file/d/1HGn_Uus1TnQ9JF-uQSg8MxdKxwJvo8dW/view?usp=drive_link">
              Resume
            </Link>
          </button>
          <button className="btn btn-outline btn-accent ">
            <Link href="#contact-section">Contact</Link>
          </button>
        </div>
        <div className="w-full h-full flex-1 ">
          <Image src={profile} alt="Men"></Image>
        </div>
      </div>
      <div className="px-10">
        <About></About>
        <Skills></Skills>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default HomePage;
