import Image from "next/image";
import about from "public/about-pick.jpg";

const About = () => {
  return (
    <div className="mt-20 flex gap-20 items-center  container max-w-screen-xl mx-auto px-5">
      <div className="flex-1">
        <h1 className="text-5xl font-bold mb-5">About Me</h1>
        <p>
          Hello there, I&apos;m Muttakin Ahmed, a web developer with a strong
          love for creating amazing online experiences. I&apos;ve recently
          finished an online course in web development, which has given me the
          skills to turn digital ideas into reality. From the very basics of the
          web—HTML5 and CSS3—to the interactive features brought to life by
          JavaScript and frameworks like React.js, I&apos;m all about making
          websites that are engaging and inspiring. I&apos;ve also dived into
          the world of backend development, using Node.js and Express.js to
          create efficient server-side applications that handle data using
          MongoDB. Web development is more than just a bunch of skills for me;
          it&apos;s a dynamic journey of solving problems and coming up with new
          ideas that I&apos;m really excited about. I truly believe that through
          the web, we have the ability to shape the digital world in important
          ways. Thank you for considering my portfolio. If my enthusiasm for web
          development resonates with your company&apos;s values, I&apos;m
          excited to explore how I can contribute to your team&apos;s success.
        </p>
      </div>
    </div>
  );
};

export default About;
