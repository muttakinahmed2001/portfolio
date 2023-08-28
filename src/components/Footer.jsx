import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <h1 className="btn btn-ghost normal-case text-white text-xl ">
            Muttakin <span className="text-green-600">Ahmed</span>
          </h1>
        </div>
        <div>
          <span className="footer-title">Useful Links</span>
          <Link href={"/"}>Home</Link>
          <Link href={"/portfolio"}>Portfolio</Link>
          <Link href={"/blog"}>Blog</Link>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <div className="grid grid-flow-col gap-4">
            <Link href={"https://www.facebook.com/muttakin.ahmed.547/"}>
              <FaFacebook className="w-5 h-5 fill-current"></FaFacebook>
            </Link>

            <Link
              href={"https://www.linkedin.com/in/muttakin-ahmed-8b382727b/"}>
              <FaLinkedin className="w-5 h-5 fill-current"></FaLinkedin>
            </Link>

            <Link href={"https://github.com/muttakinahmed2001"}>
              <FaGithub className="w-5 h-5 fill-current"></FaGithub>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
