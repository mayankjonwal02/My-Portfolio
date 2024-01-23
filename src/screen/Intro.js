import React from "react";
import Particlebackground from "../component/Particlebackground";
import Typewriter from "typewriter-effect";
import "../customcss/mycss.css";
import { Link, NavLink, Router } from 'react-router-dom';
import MyInfo from "../component/MyInfo";
import Skills from "../component/Skills";
import Projects from "../component/projects";
import Contact from "../component/Contact";


export default function Intro() {

  const driveLink = 'https://drive.google.com/file/d/1aKZH0EfdnVYPchlNObhK2FPbTwHau8i6/view?usp=drive_link';
  return (
    <div>
      <Particlebackground />

      <div
        className=""
        style={{
          zIndex: 1,
          position: "relative",
          display: "flex",
          justifyContent:"center",
          height: "100%",
          width: "100%",
        }}
      >
        <div className="main" style={{  }}>
          <div className="intro" style={{}}>
            <div className="name" style={{}}>
              <div className="fw-bold myname" style={{}}>
                Mayank Jonwal
              </div>
              {/* <div
            className="fw-bold"
            style={{ color: "#00ffff", fontSize: "50px" }}
          >
            Jonwal
          </div> */}
              <div className="fw-bold quote" style={{}}>
                <Typewriter
                  options={{
                    strings: ["I'm a Full-Stack Developer", "I Love Coding !!"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              {/* <Cube/> */}
            </div>

            <div className="neon-container">
              <div className="neon-border fw-bold" style={{ color: "#00ffff" }}>
                <i className="fas fa-code " style={{ fontSize: "10vw" }}>
                  {"</>"}
                </i>
              </div>
            </div>
          </div>
          <div style={{display:"flex",marginTop:"3vw",justifyContent:"center"}}>

          <a className="resume" href={driveLink} target="_blank" rel="noopener noreferrer">
        Resume
      </a>
          </div>
          <MyInfo/>
          <Skills/>
          <Projects/>
          <Contact/>
        </div>
      </div>
    </div>
  );
}
