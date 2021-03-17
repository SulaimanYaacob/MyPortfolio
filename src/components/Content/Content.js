import React from "react";
import "./ContentStyle.css";
import Zoom from "react-reveal/Zoom";
import Jello from "react-reveal/Jello";

function Content() {
  return (
    <div className="content">
      <h3>Introduction</h3>
      <Zoom>
        <p>
          I am a Web Developer and a student currently pursuing a degree. 2013
          was the year I started coding and became immersed in the field of
          coding. My primary motivation was to make my own video game, but as
          time passed, I became interested in web development. While I have some
          coding experience, I would not consider myself a skilled programmer at
          this time because I am still honing my skills to become one.
        </p>
      </Zoom>
      <Jello>
        <hr></hr>
      </Jello>
    </div>
  );
}

export default Content;
