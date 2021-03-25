import axios from "axios";
import "./HobbyStyle.css";
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
        return (
          <>
            <h4 className="sub-title">{exp.hobby}</h4>
            <div key={exp.id} className="hobby">
              <p>{exp.description}</p>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Hobby;
