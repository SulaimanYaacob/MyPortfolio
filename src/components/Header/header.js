import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
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
        href="https://www.linkedin.com/in/sulaiman-yaacob-563895209/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillLinkedin />
      </a>
    </div>
  );
}

export default header;
