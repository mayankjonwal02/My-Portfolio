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
          style={{ backgroundColor: "blue", color: "#00ffff", width: "100px" , borderBottom : Skills === "Skills" ? "8px solid #00ffff" :"none" ,cursor:"pointer",textDecorationThickness:"20px"}}
        >
          Skills
        </div>
        <div
          className="card p-2 fw-bold"
          onClick={() => {
            setSkills("Experience");
          }}
          style={{ backgroundColor: "blue", color: "#00ffff", width: "100px" ,borderBottom : Skills === "Experience" ? "8px solid #00ffff" :"none",cursor:"pointer"}}
        >
          Experience
        </div>
        <div
          className="card p-2 fw-bold"
          onClick={() => {
            setSkills("Education");
          }}
          style={{ backgroundColor: "blue", color: "#00ffff", width: "100px" ,borderBottom : Skills === "Education" ? "8px solid #00ffff" :"none",cursor:"pointer"}}
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
            <div className="" style={{ display: "flex", flexDirection: "column" ,padding:"10px"}}>
              <div className="fs-1 fw-bold text-primary">Skills</div>
              <div>

              </div>
              <div
                className="fs-4 fw-bold text-Black mt-3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "fit-content",
                  justifyContent:"flex-start",
                  alignItems: "flex-start",
                 
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
                  <div className="text-primary skilltitle" >Programming Languages :</div>
                  <div className="skilltext" >
                    Python , Kotlin , C , C++ , R , Kotlin , HTML , CSS ,
                    JavaScript , PHP
                  </div>
                </div>
              </div>

              <div
                className="fs-4 fw-bold text-Black mt-3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "fit-content",
                  justifyContent: "start",
                  alignItems: "flex-start",
                  
                  
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <div className="text-primary skilltitle">Tools :</div>
                  <div className="skilltext">
                    Github , Intellij Idea , Android Studio , VS Code , Arduino
                    IDE , Pycharm , UNITY
                  </div>
                </div>
                  
                
              </div>

              <div
                className="fs-4 fw-bold text-Black mt-3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "fit-content",
                  justifyContent: "start",
                  alignItems: "flex-start",
                  
                  
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <div className="text-primary skilltitle">Server & Database :</div>
                  <div className="skilltext">
                  XAMPP , APACHE , MySQL , PostgreSql , Mongodb , Neo4j , Firebase , Socket Programming
                  </div>
                </div>
                  
                
              </div>

           

                <div
                className="fs-4 fw-bold text-Black mt-3"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "fit-content",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  // padding: "10px",
                  // paddingLeft: "20px",
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
                  <div className="text-primary skilltitle">Development</div>











                  <div style={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                    marginLeft:"20px",
                    
                  }}>
                  
                      <div className="text-primary skilltitle">Android-IOS App Development :</div>
                  <div className="skilltext">
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
                  
                      <div className="text-primary skilltitle">Desktop App Development :</div>
                  <div className="skilltext">
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
                  
                      <div className="text-primary skilltitle">Web App Development :</div>
                  <div className="skilltext">
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
                  
                      <div className="text-primary skilltitle">Machine Learning :</div>
                  <div className="skilltext">
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
                  
                      <div className="text-primary skilltitle">Deep Learning :</div>
                  <div className="skilltext">
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
                  
                      <div className="text-primary skilltitle">Computer Vision :</div>
                  <div className="skilltext">
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
                  
                      <div className="text-primary skilltitle">IOT :</div>
                  <div className="skilltext">
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
                className="fs-4 fw-bold text-Black mt-3"
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
                  <div className="text-primary skilltitle2">Software Development Engineer ( Intern )</div>
                  <div className="skilltext1">
                    Digitrix Agency
                  </div>
                  <div className="skilltext1">
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
                  <div className="text-primary skilltitle2">Undergraduate Researcher</div>
                  <div className="skilltext1">
                  CSE Department , IIT Jodhpur
                  </div>
                  <div className="skilltext1">
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
                  <div className="text-primary skilltitle2">Junior Project Student Assistant</div>
                  <div className="skilltext1">
                  CIVIL Department , IIT Jodhpur
                  </div>
                  <div className="skilltext1">
                  Dec 2022 - Dec 2023 
                  </div>
                  </div>
                  </div>
                  </div>
          ) : Skills === "Education" ? (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="fs-1 fw-bold text-primary">Education</div>
              <div
                className="fs-4 fw-bold text-Black mt-3"
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
                  <div className="text-primary skilltitle1">BTech</div>
                  <div className="skilltext1">
                    IIT Jodhpur - AI & Data Science
                  </div>
                  <div className="skilltext1">
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
                  <div className="text-primary skilltitle1">HSC</div>
                  <div className="skilltext1">
                    St. Teresa School
                  </div>
                  <div className="skilltext1">
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
                  <div className="text-primary skilltitle1">SSC</div>
                  <div className="skilltext1">
                    St. Teresa School
                  </div>
                  <div className="skilltext1">
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
