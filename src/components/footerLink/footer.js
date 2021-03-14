import React from "react";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import "./footer.css";

function footer() {
  return (
    <div className="footerLink">
      <a
        href="https://github.com/SulaimanYaacob"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100004964506089"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillFacebook />
      </a>
    </div>
  );
}

export default footer;
