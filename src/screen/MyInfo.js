import React from 'react'
import imgsrc from '../assets/IMG_20231128_225118-removebg-preview.png'

export default function MyInfo() {
  return (
    <div className='' style={{display:"flex",flexDirection:"row",width:"100%",justifyContent:"start"}}>
      
      <div className=""  style={{width:"40%",marginLeft:"0px"}}>
      <img src={imgsrc} alt="Description of the image" className="responsive-image" style={{width:"100%",height:"auto"}}/>
    </div>

    <div className='' style={{flex:1,flexDirection:"column",alignItems:"center",display:"flex"}}>
        <div className=' fw-bold fs-1' style={{color:"#00ffff",marginTop:"13vw"}}>About me</div>
        <div className='card bg-primary' style={{width:"80%"}}>Filling It</div>
    </div>
      
    </div>
  )
}
