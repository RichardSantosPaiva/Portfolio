import React from 'react';
import './style.css';
import Carousel  from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import { useState, useEffect } from 'react';
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";

export default function Slide(){
  return(
    <Carousel className='carrossel'>
      <Carousel.Item className="item" interval={1500}>
        <FaReact className="icone" />
        <h2>React</h2>
      </Carousel.Item>
      <Carousel.Item className="item" interval={1500}>
        <FaReact className="icone" />
        <h2>React Native</h2>
      </Carousel.Item>
      <Carousel.Item className="item" interval={1500} >
        <FaJs className="icone" />
        <h2>JavaScript</h2>
      </Carousel.Item>
      <Carousel.Item className="item" interval={1500} >
        <FaVuejs className="icone" />
        <h2>Vue.js</h2>
      </Carousel.Item>
      <Carousel.Item className="item" interval={1500} >
        <FaGitAlt className="icone" />
        <h2>Git</h2>
      </Carousel.Item>
      <Carousel.Item className="item" interval={1500} >
        <FaBootstrap className="icone" />
        <h2>Bootstrap</h2>
      </Carousel.Item>
      <Carousel.Item className="item" interval={1500} style={{height:146}} >
        <h2>UX/UI</h2>
      </Carousel.Item>
  </Carousel>
  )
}