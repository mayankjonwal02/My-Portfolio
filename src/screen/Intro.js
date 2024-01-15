import React from "react";
import Particlebackground from "../component/Particlebackground";
import Typewriter from "typewriter-effect";
import "../customcss/mycss.css";

export default function Intro() {
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
          <div style={{display:"flex",margin:"10vw",justifyContent:"center"}}>
          <div className="resume"  style={{ }}>
            Resume
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
