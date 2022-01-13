import React from "react";

import './about.css';

function About() {
    return (
      <div className="about_cont">
        <h1>Welcome To 
          <span>The Rubik's</span>
        </h1>
        <p>
          The Rubik's is a Professional Rubik's Cube Platform. 
          Here we will provide you with only interesting content, 
          which you will like very much. 
          We're dedicated to providing you the best Rubik's Cube experience and tools, 
          with a focus on 
          <span className="about_fun"> Stopwatch, Rubik's Cube World Records, Rubik's Cube Solution </span>. 
          We're working to turn our passion for Rubik's Cube into a booming online website.
          We hope you enjoy our Rubik's Cube support much as we enjoy offering them to you.
        </p>
        <p>I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
        <p className="thankyou">
          Thanks For Visiting Our Site
        </p>
      </div>
    );
  }
  
export default About;

  