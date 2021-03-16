import React from "react";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import "./header.css";

function header() {
  return (
    <div className="headerLink">
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

export default header;
