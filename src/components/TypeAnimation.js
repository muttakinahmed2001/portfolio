"use client";
import Typewriter from "typewriter-effect";

const TypeAnimation = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Frontend Developer",
          "React.js Developer",
          "MERN Stack Developer",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypeAnimation;
