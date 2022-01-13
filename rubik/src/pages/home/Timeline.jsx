import React from "react";

import './timeline.css';

function Timeline() {
    return (
          
        <div className="timeline">
            <div className="container left">
                <div className="content">
                    <div className="date">1974</div>
                    <p>
                        Invention of Rubik's Cube and the first solution by Professor Rubik
                    </p>
                </div>
            </div>

            <div className="container right">
                <div className="content">
                    <div className="date">1981</div>
                    <p>
                        First Rubik's Cube competition in the world
                    </p>
                </div>
            </div>

            <div className="container left">
                <div className="content">
                <div className="date">1983</div>
                <p>
                    Invention of two-order Rubik's Cube & three-order Rubik's Cube
                </p>
                </div>
            </div>

            <div className="container right">
                <div className="content">
                <div className="date">1986</div>
                <p>
                    Invention of five-order Rubik's Cube
                </p>
                </div>
            </div>

            <div className="container left">
                <div className="content">
                <div className="date">2007</div>
                <p>
                    Solve third-order Rubik's Cube within 10s 
                </p>
                <p>
                (Thibaut Jacquinot, 9.86s)
                </p>
                </div>
            </div>

            <div className="container right">
                <div className="content">
                <div className="date">2015</div>
                <p>
                    Solve third-order Rubik's Cube within 5s 
                </p>
                <p>
                    (Lucas Etter, 4.904s)
                </p>
                </div>
            </div>

            <div className="container left">
                <div className="content">
                <div className="date">2018</div>
                <p>
                    Solve third-order Rubik's Cube within 4s 
                </p>
                <p>
                    (Yusheng Du, 3.475s)
                </p>
                </div>
            </div>

            <div className="container right">
                <div className="content">
                    <div className="date">
                    Continues...
                    </div>
                </div>
            </div>
        </div>

    );
  }
  
export default Timeline;

  

