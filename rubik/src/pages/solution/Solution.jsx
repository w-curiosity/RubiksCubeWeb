import React from "react";

import './solution.css';

function Solution() {
    return (
      <div  className="sol_nav">

        <div className="sol_grp">
          <div className="sol_entry" id="sol_edge" aria-label="edge solution">
            <img className="sol_entry_img" src="./img/solution/cubes/RubiksCubeEdge.PNG" alt="Rubik's Cube Edge" />
            <div className="sol_entry_text">Edge</div>
            <button className="sol_entry_btn sol_entry_btn--hidden" aria-label="edge solution button"><a href="/edge-solution-guide">READ GUIDE</a></button>
          </div>
          
          <div className="sol_entry" id="sol_2xcube" aria-label="2x2x2 cube solution">
            <img className="sol_entry_img" src="./img/solution/cubes/RubiksCube2Order.PNG" alt="2x2x2 Rubik's Cube" />
            <div className="sol_entry_text">2x2x2 Cube</div>
            <button className="sol_entry_btn sol_entry_btn--hidden" aria-label="2x2x2 cube solution button"><a href="/2xcube-solution-guide">READ GUIDE</a></button>
          </div>

          <div className="sol_entry" id="sol_3xcube" aria-label="3x3x3 cube solution">
            <img className="sol_entry_img" src="./img/solution/cubes/RubiksCube3Order.PNG" alt="3x3x3 Rubik's Cube" />
            <div className="sol_entry_text">3x3x3 Cube</div>
            <button className="sol_entry_btn sol_entry_btn--hidden" aria-label="3x3x3 cube solution button"><a href="/3xcube-solution-guide">READ GUIDE</a></button>
          </div>

          <div className="sol_entry" id="sol_4xcube" aria-label="4x4x4 cube solution">
            <img className="sol_entry_img" src="./img/solution/cubes/RubiksCube4Order.PNG" alt="4x4x4 Rubik's Cube" />
            <div className="sol_entry_text">4x4x4 Cube</div>
            <button className="sol_entry_btn sol_entry_btn--hidden" aria-label="4x4x4 cube solution button"><a href="/4xcube-solution-guide">READ GUIDE</a></button>
          </div>

          <div className="sol_entry" id="sol_5xcube" aria-label="5x5x5 cube solution">
            <img className="sol_entry_img" src="./img/solution/cubes/RubiksCube5Order.PNG" alt="5x5x5 Rubik's Cube" />
            <div className="sol_entry_text">5x5x5 Cube</div>
            <button className="sol_entry_btn sol_entry_btn--hidden" aria-label="5x5x5 cube solution button"><a href="/5xcube-solution-guide">READ GUIDE</a></button>
          </div>

          <div className="sol_entry" id="sol_more" aria-label="more solution">
          <div className="sol_entry_p">Looking for More Solution</div>
            <button className="sol_entry_btn" aria-label="more solution button"><a href="/more-solution-guide">View More</a></button>
          </div>
          
        </div>

      </div>
    );
  }
  
export default Solution;
