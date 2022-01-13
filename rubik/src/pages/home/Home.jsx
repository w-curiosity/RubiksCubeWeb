import React from "react";

import './home.css';

import Timeline from "./Timeline";

function Home() {
    return (
      <div>
          <img className="home-img" src="./img/home/RubiksCubeHome.png" alt="Rubik's Cube"  role="img" aria-label="Rubik Cubes"/>
          <Timeline />
      </div>
    );
  }
  
export default Home;

  