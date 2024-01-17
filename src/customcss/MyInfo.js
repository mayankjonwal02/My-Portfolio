import React from "react";
import imgsrc from "../assets/IMG_20231128_225118-removebg-preview.png";
import "../customcss/mycss.css"

export default function MyInfo() {
  return (
    <div className="myinfodiv" style={{}}>
    <div className="image" style={{}}>

      <img
        src={imgsrc}
        className="bg "
        alt="Description of the image"
        style={{ width:"100%" }}
      />
    </div>

      <div className="" style={{display:"flex",flex:1,flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:"6vw"}}>
        <div className="aboutme" style={{}}>About Me</div>
        <div className="card m-3 p-2 aboutintro" style={{backgroundColor:"#00ffff",color:"blue",fontWeight:"bold"}}>Greetings! Hailing from Delhi, I'm currently pursuing BTech in AI and Data Science at IIT Jodhpur . A software development enthusiast, I thrive on crafting solutions with Kotlin, MERN, Django, and more. Join me as I code the narrative of an exciting future where innovation knows no bounds! </div>
      </div>

      
    </div>

    
  );
}

{
  /* <div
          className="bg-success"
          style={{ display: "flex", flex: 1, margin: 0 }}
        >
          <img
            src={imgsrc}
            className="bg-warning"
            alt="Description of the image"
            style={{ width: "600px" }}
          />
        </div> */
}

{
  /* <div
          className=""
          style={{
            display: "flex",
            flex: 2,
            flexDirection: "column",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div
            className="fw-bold fs-1"
            style={{ color: "#00ffff", marginTop: "13vw" }}
          >
            About me
          </div>
          <div className="card bg-primary" style={{ width: "70%" }}>
            Filling It
          </div>
        </div> */
}
// </div>
