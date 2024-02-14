import React from "react";
import "../customcss/mycss.css";
import {
  AiFillMail,
  AiFillPhone,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
export default function Contact() {
  return (
    <div className="container" style={{ width: "100%", height: "fit-content" }}>
      <div className="text-white fw-bold contact" style={{}}>
        Contact Me
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "80px",
          padding: "10px",
          marginBottom: "80px",
        }}
      >
        <a href="mailto:jonwal.1@iitj.ac.in" style={{ textDecoration: "none" }}>
          <div className="icon-container">
            <AiFillMail size={30} style={{ color: "#00ffff" }} />
            <p style={{ color: "#00ffff" }}>Gmail</p>
          </div>
        </a>

        <a href="tel:+9625401776" style={{ textDecoration: "none" }}>
          <div className="icon-container">
            <AiFillPhone size={30} style={{ color: "#00ffff" }} />
            <p style={{ color: "#00ffff" }}>Contact</p>
          </div>
        </a>

        <a
          href="https://github.com/mayankjonwal02"
          style={{ textDecoration: "none" }}
        >
          <div className="icon-container">
            <AiFillGithub size={30} style={{ color: "#00ffff" }} />
            <p style={{ color: "#00ffff" }}>GitHub</p>
          </div>
        </a>

      
        <a
          href="https://www.linkedin.com/in/mayank-jonwal-b79a5a1ba/"
          style={{ textDecoration: "none" }}
        >
          <div className="icon-container">
            <AiFillLinkedin size={30} style={{ color: "#00ffff" }} />
            <p style={{ color: "#00ffff" }}>LinkedIn</p>
          </div>
        </a>
      </div>
    </div>
  );
}
