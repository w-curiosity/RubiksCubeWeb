import React from "react";

import './solutionGuide.css';

function Solution2xCube() {
  return (
    <div className="sol_cont">

      <div className="return-solut">
        <a href="/solution">
            <span> Solution &gt; </span>
        </a>
        <span>2x2x2 Solution Guides</span>
      </div>

      <h1>Solve the 2x2x2 Rubik's Cube</h1>
      <p>
        This is the 2x2x2 version of Erno Rubik's original Rubik's Cube. This cube is also called Pocket Cube or Mini Cube. You might think it is easy to have only 4 faces on each side, but this is still a challenge. Here are some guide that will help you figure it out.
      </p>
      
      <div className="sol_guide">
          {/* step 1 */}
          <div className="sol_guide_step" aria-label="step 1">
              <img src="./img/solution/step/step1.png" alt="Step 1" />
          </div>
          <div className="sol_guide_text">
            Solve the Top Layer, four Corners
          </div>
          <div className="sol_guide_img" role="img" aria-label="step1-img">
              <img className="sol_img_all sol_img_2xcube" src="./img/solution/twoxcube/Rubiks2xSolu_step1.PNG" alt="2x Cube Solution Step 1" />
          </div>
          {/* step 2 */}
          <div className="sol_guide_step" aria-label="step 2">
              <img src="./img/solution/step/step2.png" alt="Step 2" />
          </div>
          <div className="sol_guide_text">
            Solve the 2nd Layer, Make the Yellow Face
          </div>
          <div className="sol_guide_img" role="img" aria-label="step2-img">
            <img className="sol_img_all sol_img_2xcube" src="./img/solution/twoxcube/Rubiks2xSolu_step2.png" alt="2x Cube Solution Step 2" />
          </div>
          {/* step 3 */}
          <div className="sol_guide_step" aria-label="step 3">
              <img src="./img/solution/step/step3.png" alt="Step 3" />
          </div>
          <div className="sol_guide_text">
            Place The Yellow Corners Correctly
          </div>
          <div className="sol_guide_img" role="img" aria-label="step3-img">
            <img className="sol_img_all sol_img_2xcube" src="./img/solution/twoxcube/Rubiks2xSolu_step3.png" alt="2x Cube Solution Step 3" />
          </div>

      </div>
    </div>

  );
}
  
export default Solution2xCube;

  