import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact-section" className="bg-green-300 p-5">
      <h1 className="text-center mb-10 font-bold text-2xl sm:text-5xl items-center">
        Contact Information
      </h1>
      <div className="flex flex-col sm:flex-row gap-10">
        <div className="flex-1 my-3">
          <h1 className="text-xl sm:text-3xl font-bold mb-5">Lets Connect</h1>
          <p>Please fill out the form on this section to contact with me.</p>

          <div className="flex gap-3 mt-3">
            <Link href={"https://www.facebook.com/muttakin.ahmed.547/"}>
              <FaFacebook className="w-5 h-5"></FaFacebook>
            </Link>

            <Link
              href={"https://www.linkedin.com/in/muttakin-ahmed-8b382727b/"}>
              <FaLinkedin className="w-5 h-5"></FaLinkedin>
            </Link>

            <Link href={"https://github.com/muttakinahmed2001"}>
              <FaGithub className="w-5 h-5"></FaGithub>
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-xl sm:text-3xl font-bold mb-5">
            Let’s Message me
          </h1>
          <div className="form-control w-full max-w-xs my-3">
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="Your email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <textarea
            placeholder="Message"
            className="textarea mt-3 textarea-bordered textarea-lg w-full max-w-xs"></textarea>

          <input
            className="btn btn-accent mt-5 "
            type="submit"
            value="Submit"
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;