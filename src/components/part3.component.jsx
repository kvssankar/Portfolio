import React from "react";
import "../sass/navbar.scss";
import "../sass/flex.scss";
import "../sass/part3.scss";
import SkillBar from 'react-skillbars';
const Part3 = () => {
  const SKILLS= [
    {
      "type": "Java",
      "level": 100,
      "color": {
        "bar": "#3498db",
        "title": {
          "text": "#fff",
          "background": "#2980b9"
        }
      }
    },
    {
      "type": "React",
      "level": 85,
      "color": {
        "bar": "#4288d0",
        "title": {
          "text": "#fff",
          "background": "#124e8c"
        }
      }
    },
    {
      "type": "Javascript",
      "level": 75,
      "color": {
        "bar": "#2c3e50",
        "title": {
          "text": "#fff",
          "background": "#2c3e50"
        }
      }
    },
    {
      "type": "Spring",
      "level": 50,
      "color": {
        "bar": "#5a68a5",
        "title": {
          "text": "#fff",
          "background": "#46465e"
        }
      }
    },
    {
      "type": "Docker",
      "level": 25,
      "color": {
        "bar": "#525252",
        "title": {
          "text": "#fff",
          "background": "#333333"
        }
      }
    },
    {
      "type": "HTML",
      "level": 20,
      "color": {
        "bar": "black",
        "title": {
          "text": "#111",
          "background": "#fff"
        }
      }
    },
    {
      "type": "NoSQL",
      "level": 0,
      "color": {
        "bar": "#2ecc71",
        "title": {
          "text": "#fff",
          "background": "#27ae60"
        }
      }
    }
  ]
  return(
  <div id="skills" className="parent-flex" style={{ justifyContent: "center",marginTop:"80px" }}>
    <div className="right">
      <img height="370px" src="https://www.flaticon.com/svg/static/icons/svg/609/609129.svg" alt=""/>
    </div>
    <div className="left">
    <h3>My Skills</h3>
<SkillBar skills={SKILLS}/>
    </div>{" "}
  </div>
  );
};

export default Part3;