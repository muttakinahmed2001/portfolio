import Image from "next/image";

const Skills = () => {
  const frontend = [
    "/public/skills/html.jpg",
    "/public/skills/css.jpg",
    "/public/skills/bootstrap.jpg",
    "/public/skills/tailwind.jpg",
    "/skills/daisy.png",
    "/skills/javascript.png",
    "/skills/react.png",
    "/skills/next.png",
  ];

  const backend = [
    "/skills/node.png",
    "/skills/express.png",
    "/skills/mongo.png",
  ];

  const firebase = ["/skills/firebase.png"];
  const redux = ["/skills/redux.png"];

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
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl  sm:text-3xl text-center font-bold mb-10">
            Authentication
          </h1>
          <div>
            {firebase.map((skill, index) => (
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
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl  sm:text-3xl text-center font-bold mb-10">
            State Management
          </h1>
          <div>
            {redux.map((skill, index) => (
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
