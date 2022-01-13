import React from "react";

import './solutionGuide.css';

function Solution4xCube() {
  return (
    <div className="sol_cont">

      <div className="return-solut">
        <a href="/solution">
            <span> Solution &gt; </span>
        </a>
        <span>4x4x4 Solution Guides</span>
      </div>      

      <h1>Solve the 4x4x4 Rubik's Cube</h1>
      <p>
      The Rubik’s 4x4x4 cube is also known as The Rubik’s Revenge. Unlike the original 3x3x3 cube, the 4x4x4 has no fixed center and so it is even harder to solve!! 
      </p>
      
      <div className="sol_guide">
          {/* step 1 */}
          <div className="sol_guide_step" aria-label="step 1">
              <img src="./img/solution/step/step1.png" alt="Step 1" />
          </div>
          <div className="sol_guide_text">
            Make the center of the first face
          </div>
          <div className="sol_guide_img" role="img" aria-label="step1-img">
              <img className="sol_img_all sol_img_4xcube" src="./img/solution/fourxcube/Rubiks4xSolu_step1.png" alt="4x Cube Solution Step 1" />
          </div>
          {/* step 2 */}
          <div className="sol_guide_step" aria-label="step 2">
              <img src="./img/solution/step/step2.png" alt="Step 2" />
          </div>
          <div className="sol_guide_text">
            Solve the center of the opposite face
          </div>
          <div className="sol_guide_img" role="img" aria-label="step2-img">
            <img className="sol_img_all sol_img_4xcube" src="./img/solution/fourxcube/Rubiks4xSolu_step2.png" alt="4x Cube Solution Step 2" />
          </div>
          {/* step 3 */}
          <div className="sol_guide_step" aria-label="step 3">
              <img src="./img/solution/step/step3.png" alt="Step 3" />
          </div>
          <div className="sol_guide_text">
            Match the center of the other faces
          </div>
          <div className="sol_guide_img" role="img" aria-label="step3-img">
            <img className="sol_img_all sol_img_4xcube" src="./img/solution/fourxcube/Rubiks4xSolu_step3.png" alt="4x Cube Solution Step 3" />
          </div>
          {/* step 4 */}
          <div className="sol_guide_step" aria-label="step 4">
              <img src="./img/solution/step/step4.png" alt="Step 4" />
          </div>
          <div className="sol_guide_text">
            Edge Pairing
          </div>
          <div className="sol_guide_img" role="img" aria-label="step4-img">
            <img className="sol_img_all sol_img_4xcube" src="./img/solution/fourxcube/Rubiks4xSolu_step4.png" alt="4x Cube Solution Step 4" />
          </div>
          {/* step 5 */}
          <div className="sol_guide_step" aria-label="step 5">
              <img src="./img/solution/step/step5.png" alt="Step 5" />
          </div>
          <div className="sol_guide_text">
            Solve as the 3x3x3 Rubik's Cube
          </div>
          <div className="sol_guide_img" role="img" aria-label="step5-img">
            <img className="sol_img_all sol_img_4xcube" src="./img/solution/fourxcube/Rubiks4xSolu_step5.png" alt="4x Cube Solution Step 5" />
          </div>
          {/* step 6 */}
          <div className="sol_guide_step" aria-label="step 6">
              <img src="./img/solution/step/step6.png" alt="Step 6" />
          </div>
          <div className="sol_guide_text">
            Parity Errors
          </div>
          <div className="sol_guide_img" role="img" aria-label="step6-img">
            <img className="sol_img_all sol_img_4xcube" src="./img/solution/fourxcube/Rubiks4xSolu_step6.png" alt="4x Cube Solution Step 6" />
          </div>
      </div>
    </div>
  );
}
  
export default Solution4xCube;
