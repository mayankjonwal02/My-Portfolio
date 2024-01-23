import React from "react";
import { useState } from "react";
import Blur from 'react-blur'

export default function Skills() {
  const [Skills, setSkills] = useState("Skills");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "fit-content",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <div
          className="card p-2 fw-bold"
          onClick={() => {
            setSkills("Skills");
          }}
          style={{ backgroundColor: "#00ffff", color: "blue", width: "100px" }}
        >
          Skills
        </div>
        <div
          className="card p-2 fw-bold"
          onClick={() => {
            setSkills("Experience");
          }}
          style={{ backgroundColor: "#00ffff", color: "blue", width: "100px" }}
        >
          Experience
        </div>
        <div
          className="card p-2 fw-bold"
          onClick={() => {
            setSkills("Education");
          }}
          style={{ backgroundColor: "#00ffff", color: "blue", width: "100px" }}
        >
          Education
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "fit-content",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "fit-content",
            backgroundColor: "rgba(255,255,255,0.7)",
            marginTop: "10px",
            justifyContent:"start",
            borderRadius:"40px"
            
          }}
        >
          {Skills === "Skills" ? (
            <div className="" style={{ display: "flex", flexDirection: "column" }}>
              <div className="fs-1 fw-bold text-primary">Skills</div>
              <div
                className="fs-4 fw-bold text-Black"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "fit-content",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  padding: "10px",
                  paddingLeft: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="text-primary">Programming Languages :</div>
                  <div className="ms-4 fs-5">
                    Python , Kotlin , C , C++ , R , Kotlin , HTML , CSS ,
                    JavaScript , PHP
                  </div>
                </div>
              </div>

              <div
                className="fs-4 fw-bold text-Black"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "fit-content",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  padding: "10px",
                  paddingLeft: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="text-primary">Tools :</div>
                  <div className="ms-4 fs-5">
                    Github , Intellij Idea , Android Studio , VS Code , Arduino
                    IDE , Pycharm , UNITY
                  </div>
                </div>
                  
                
              </div>

              <div
                className="fs-4 fw-bold text-Black"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "fit-content",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  padding: "10px",
                  paddingLeft: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="text-primary">Server & Database :</div>
                  <div className="ms-4 fs-5">
                    XAMPP , APACHE , MySQL , PostgreSql , Mongodb , Neo4j , Firebase , Socket Programming
                  </div>
                </div>
                </div>

                <div
                className="fs-4 fw-bold text-Black"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "fit-content",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  padding: "10px",
                  paddingLeft: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "Column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}
                >
                  <div className="text-primary">Development</div>











                  <div style={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                    marginLeft:"20px",
                    
                  }}>
                  
                      <div className="text-primary">Android-IOS App Development :</div>
                  <div className="ms-4 fs-5">
                  Jetpack Compose , XML
                  </div>
                  </div>







                  <div style={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                    marginLeft:"20px",
                    
                  }}>
                  
                      <div className="text-primary">Desktop App Development :</div>
                  <div className="ms-4 fs-5">
                  Jetpack Compose , PyQT5 , TKinter
                  </div>
                  </div>




                  <div style={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                    marginLeft:"20px",
                    
                  }}>
                  
                      <div className="text-primary">Web App Development :</div>
                  <div className="ms-4 fs-5">
                  React.js , Node.js , Express.js , MongoDB , Django , Flask , PHP
                  </div>
                  </div>











                  <div style={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                    marginLeft:"20px",
                    
                  }}>
                  
                      <div className="text-primary">Machine Learning :</div>
                  <div className="ms-4 fs-5">
                  Scikit-Learn , Numpy , Pandas
                  </div>
                  </div>






                  <div style={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                    marginLeft:"20px",
                    
                  }}>
                  
                      <div className="text-primary">Deep Learning :</div>
                  <div className="ms-4 fs-5">
                  Tensorflow , Keras , Pytorch
                  </div>
                  </div>













                  <div style={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                    marginLeft:"20px",
                    
                  }}>
                  
                      <div className="text-primary">Computer Vision :</div>
                  <div className="ms-4 fs-5">
                  OpenCV , Numpy , Tensorflow , Pytorch , YOLO , MediaPipe , R-CNN , -Detection , Classification , Segmentation, Pose , Tracking
                  </div>
                  </div>



















                  <div style={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                    marginLeft:"20px",
                    
                  }}>
                  
                      <div className="text-primary">IOT :</div>
                  <div className="ms-4 fs-5">
                  Arduino , Raspberry Pi ,NodeMCU
                  </div>
                  </div>
                </div>
                </div>
            </div>
          ) : Skills === "Experience" ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="fs-1 fw-bold text-primary">Experience</div>
              <div
                className="fs-4 fw-bold text-Black"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "fit-content",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  padding: "10px",
                  paddingLeft: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "start",
                  }}
                >
                  <div className="text-primary fs-3">Software Development Engineer ( Intern )</div>
                  <div className="fs-5">
                    Digitrix Agency
                  </div>
                  <div className="fs-6">
                   Dec 2023 - Till Date
                  </div>
                  </div>


                  <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "start",
                    marginTop:"30px"
                  }}
                >
                  <div className="text-primary fs-3">Undergraduate Researcher</div>
                  <div className="fs-5">
                  CSE Department , IIT Jodhpur
                  </div>
                  <div className="fs-6">
                  March 2023 - Till Date  
                  </div>
                  </div>



                  <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "start",
                    marginTop:"30px"
                  }}
                >
                  <div className="text-primary fs-3">Junior Project Student Assistant</div>
                  <div className="fs-5">
                  CIVIL Department , IIT Jodhpur
                  </div>
                  <div className="fs-6">
                  Dec 2022 - Dec 2023 
                  </div>
                  </div>
                  </div>
                  </div>
          ) : Skills === "Education" ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="fs-1 fw-bold text-primary">Education</div>
              <div
                className="fs-4 fw-bold text-Black"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "fit-content",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  padding: "10px",
                  paddingLeft: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "start",
                  }}
                >
                  <div className="text-primary fs-1">BTech</div>
                  <div className="fs-5">
                    IIT Jodhpur - AI & Data Science
                  </div>
                  <div className="fs-6">
                   2021 -  2025 (exp)
                  </div>
                  </div>


                  <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "start",
                    marginTop:"30px"
                  }}
                >
                  <div className="text-primary fs-1">HSC</div>
                  <div className="fs-5">
                    St. Teresa School
                  </div>
                  <div className="fs-6">
                   2018 -  2020  
                  </div>
                  </div>



                  <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "start",
                    marginTop:"30px"
                  }}
                >
                  <div className="text-primary fs-1">SSC</div>
                  <div className="fs-5">
                    St. Teresa School
                  </div>
                  <div className="fs-6">
                   2013 -  2018 
                  </div>
                  </div>
                  </div>
                  </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
