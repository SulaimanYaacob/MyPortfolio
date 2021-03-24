import axios from "axios";
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
      {posts.map((exp) => {
        return <div key={exp.id}>{exp.hobby}</div>;
      })}
    </div>
  );
}

export default Hobby;
