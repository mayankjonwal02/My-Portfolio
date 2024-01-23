import React from 'react'
import { AiFillMail, AiFillPhone, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
export default function Contact() {
  return (
    <div className='container' style={{width:"100%",height:"fit-content"}}>
      <div className='fs-1 text-white fw-bold'>Contact Me</div>
      <div style={{display:"flex",flexDirection:"row" ,justifyContent:"space-evenly",alignItems:"center",margin:"80px"}}>
      <div className="icon-container">
        <AiFillMail size={30} style={{color:"#00ffff"}}/>
        <p style={{color:"#00ffff"}}>Gmail</p>
      </div>
      <div className="icon-container">
        <AiFillPhone size={30} style={{color:"#00ffff"}}/>
        <p style={{color:"#00ffff"}}>Contact</p>
      </div>
      <div className="icon-container">
        <AiFillGithub size={30} style={{color:"#00ffff"}}/>
        <p style={{color:"#00ffff"}}>GitHub</p>
      </div>
      <div className="icon-container">
        <AiFillLinkedin size={30} style={{color:"#00ffff"}}/>
        <p style={{color:"#00ffff"}}>LinkedIn</p>
      </div>
      </div>
    </div>
  )
}
