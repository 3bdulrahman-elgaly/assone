import React from 'react'
import avatar from "../../assets/imgs/avataaars.svg";
import "./home.css";


export default function Home() {
  return <>
  <section
      id="home"
      className="min-vh-100 d-flex justify-content-center align-items-center"
    >
    <div className='container text-center p-3 mt-5'>
      <img src={avatar} alt="avatar" />
      <h1 className='text-white display-6 fw-bold mt-5 '> START FRAMEWORK</h1>

      <div className=' d-flex justify-content-center align-items-center mt-3 mb-3'>
          <div id="line"></div>
          <i className="fa fa-solid fa-star text-white"></i>
          <div id="line"></div>
      </div>
      <p className='text-white'>  Graphic Artist - Web Designer - Illustrator</p>



    </div>
    </section>
  </>
}
