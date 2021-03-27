import axios from "axios";
import "./HobbyStyle.css";
import Fade from "react-reveal/Fade";
import React, { useState, useEffect } from "react";

function Hobby() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/SulaimanYaacob/MyPortfolio/main/src/components/Data/data.json"
      )
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h3 className="title">Hobbies</h3>
      {posts.map((exp) => {
        if (exp.id % 2 === 1) {
          return (
            <Fade left>
              <div key={exp.id} className="left-hobby">
                <img src={exp.image} alt={exp.hobby}></img>
                <h4 className="sub-title">{exp.hobby} </h4>
                <p>{exp.description}</p>
              </div>
            </Fade>
          );
        } else {
          return (
            <Fade right>
              <div key={exp.id} className="right-hobby">
                <img src={exp.image} alt={exp.hobby}></img>
                <h4 className="sub-title">{exp.hobby}</h4>
                <p>{exp.description}</p>
              </div>
            </Fade>
          );
        }
      })}
    </div>
  );
}

export default Hobby;
