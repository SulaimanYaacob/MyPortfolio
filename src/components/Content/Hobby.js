import axios from "axios";
import "./HobbyStyle.css";
import Fade from "react-reveal/Fade";
import React, { useState, useEffect } from "react";

function Hobby() {
  const [getHobby, setGetHobby] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/SulaimanYaacob/MyPortfolio/main/src/components/Data/data.json"
      )
      .then((res) => {
        setGetHobby(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="hobbies-section">
      <h2 className="title">Hobbies</h2>
      {getHobby.map((exp) => {
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
      <div className="extra-space"></div>
    </div>
  );
}

export default Hobby;
