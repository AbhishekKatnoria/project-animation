import React,{useEffect} from 'react';
import gsap from 'gsap';

function Ani() {
    useEffect(()=>{
      gsap.set(".box",{
        backgroundColor:"red",
        delay:3,
       
      })
        gsap.to(".box", {
          x: -100,
          y:-50,
          duration:4,
          
        });
      },[]);

  return (
    <div className="container">
    <div className="box"></div>
  </div>
  )
}

export default Ani