import Image from "next/image";

const Skills = () => {
  const frontend = [
    "/skills/HTML5_Badge.svg",
    "/skills/CSS3_logo.svg",
    "/skills/Bootstrap_logo.svg",
    "/skills/tailwind.jpg",
    "/skills/Unofficial_JavaScript_logo_2.svg",
    "/skills/React.svg",
    "/skills/Nextjs-logo.svg",
    "/skills/redux-logo-svgrepo-com.svg",
  ];

  const backend = [
    "/skills/node-js-svgrepo-com.svg",
    "/skills/express.svg",
    "/skills/mongodb-svgrepo-com.svg",
    "/skills/firebase-svgrepo-com.svg",
  ];

  return (
    <div className=" my-20 text-black">
      <h1 className="text-5xl text-center mb-10  font-bold">My Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div className="flex flex-col items-center">
          <h1 className="text-xl  sm:text-3xl text-center font-bold mb-10">
            Frontend Development
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5  ">
            {frontend.map((skill, index) => (
              <div className="flex justify-center items-center" key={index}>
                <Image
                  className="object-cover"
                  width={100}
                  height={100}
                  alt="icon"
                  src={skill}
                  layout="fixed"></Image>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <h1 className="text-xl  sm:text-3xl text-center font-bold mb-10">
            Backend Development
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 ">
            {backend.map((skill, index) => (
              <div key={index}>
                <Image
                  className="object-cover"
                  width={100}
                  height={100}
                  alt="icon"
                  src={skill}></Image>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
