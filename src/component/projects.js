import React from "react";
import { FaGithub } from "react-icons/fa";
export default function Projects() {
  return (
    <div
      className=""
      style={{
        
        display: "flex",
        flexDirection: "column",
        height: "fit-content",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className=" fw-bold" style={{   fontSize:"50px",     marginTop:"100px", color: "#00ffff" }}>
        Projects
      </div>
      <div
        className="projects"
      >
        <Card
          url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSxQw7pAylhg3mfLU3fI3rgzb2ubxcjt3BGg&usqp=CAU"
          name="Interactive Voice Responce"
          tech="Kotlin , PHP , XAMPP , MySQL"
          info={
            <>
              Created a robust & customizable IVR system using 2 Android
              devices, and a laptop which will communicate through Bluetooth and
              Intranet for successful IVR operations in <b>AIIMS Jodhpur</b> by
              bypassing Android restrictions
            </>
          }
        />
        <Card
          url="data:image/png;base64,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"
          name="Rakshak 2.0"
          tech="Kotlin , PHP , XAMPP , MySQL , Arduino"
          info={
            <>
              Created an effective Health-Care System for <b>Indian Army</b> by
              harnessing power of Kotlin - jetpack compose and Arduino .Focus is
              to Calculate patient's Heart Rate , SPo2 , ECG and Temperature
              using Arduino and send it to Mobile Application using Bluetooth
              Communication for Visualisation . Data Syncs to cloud when
              Internet Connection is available from local SQLite database,
            </>
          }
        />
        <Card
          url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbJ6r67bUvDtb_WsPqIsQyinbbozJ0ulNoeQ&usqp=CAU"
          name="Google Doc Clone"
          tech="React.js , Node.js , Express.js , MongoDB"
          info="Created a Perfect Google Docs' clone during my Internship at Digitrix Agency . By harnessing Power of MongoDB  , perfectly integrated version control system in this Project"
        />
        <Card
          url="data:image/jpeg;base64,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"
          name="Human Pose Estimator"
          tech="Mediapipe , LSTM , Tensorflow , Streamlit "
          info="Created a Robust and customisable Human Pose Estimator by harnessing Power of Mediapipe for feature extraction and LSTM model for train on extracted features"
        />
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div class="card" style={{ width: "20rem", backgroundColor: "#203c47" }}>
      <img
        src={props.url}
        className="card-img-top"
        alt="..."
        style={{ width: "100%", height: "300px" }}
      />
      <div
        class="card-body"
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#203c47",
        }}
      >
        <h5
          class="card-title text-center fw-bold "
          style={{ color: "#00ffff" }}
        >
          {props.name}
        </h5>
        <p class="card-text text-white text-center">
          <b>Tech-Stack :</b> {props.tech}
        </p>
        <p class="card-text text-white text-center">{props.info}</p>
        <div
          className=""
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "end",
            flex: 1,
          }}
        >
          <a href="" class="btn btn-info rounded-circle p-3">
            {" "}
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}
