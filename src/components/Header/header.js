import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./header.css";
import { links } from "./headerData";

function header() {
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 50,
    });
  };
  return (
    <div className="headerLink">
      <div>
        {links.map((link) => {
          return (
            <a
              className="nav-bar"
              href={link.url}
              key={link.id}
              onClick={handleClick}
            >
              {link.text}
            </a>
          );
        })}
      </div>
      <div className="icon-links">
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
    </div>
  );
}

export default header;
