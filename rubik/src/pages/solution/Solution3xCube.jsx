import React from "react";

import './solutionGuide.css';

function Solution3xCube() {
  return (
    <div className="sol_cont">

      <div className="return-solut">
        <a href="/solution">
            <span> Solution &gt; </span>
        </a>
        <span>3x3x3 Solution Guides</span>
      </div>

      <h1>Solve the 3x3x3 Rubik's Cube</h1>
      <p>
        This 3x3x3 Rubik's Cube is the most traditional version of Rubik's Cube. The solution to this cube is the basis of all the other Rubik's Cubes. When you figure out how to solve this cube, you are truly stepping into the world of Rubik's Cubes.
      </p>
      
      <div className="sol_guide">
          {/* step 1 */}
          <div className="sol_guide_step" aria-label="step 1">
              <img src="./img/solution/step/step1.png" alt="Step 1" />
          </div>
          <div className="sol_guide_text">
            Create A White Cross With Matched Edges And Center Pieces
          </div>
          <div className="sol_guide_img" role="img" aria-label="step1-img">
              <img className="sol_img_all sol_img_3xcube" src="./img/solution/threexcube/Rubiks3xSolu_step1.png" alt="3x Cube Solution Step 1" />
          </div>
          {/* step 2 */}
          <div className="sol_guide_step" aria-label="step 2">
              <img src="./img/solution/step/step2.png" alt="Step 2" />
          </div>
          <div className="sol_guide_text">
            Solve The White Corners
          </div>
          <div className="sol_guide_img" role="img" aria-label="step2-img">
            <img className="sol_img_all sol_img_3xcube" src="./img/solution/threexcube/Rubiks3xSolu_step2.png" alt="3x Cube Solution Step 2" />
          </div>
          {/* step 3 */}
          <div className="sol_guide_step" aria-label="step 3">
              <img src="./img/solution/step/step3.png" alt="Step 3" />
          </div>
          <div className="sol_guide_text">
            Solve Middle Layer
          </div>
          <div className="sol_guide_img" role="img" aria-label="step3-img">
            <img className="sol_img_all sol_img_3xcube" src="./img/solution/threexcube/Rubiks3xSolu_step3.png" alt="3x Cube Solution Step 3" />
          </div>
          {/* step 4 */}
          <div className="sol_guide_step" aria-label="step 4">
              <img src="./img/solution/step/step4.png" alt="Step 4" />
          </div>
          <div className="sol_guide_text">
            Make A Yellow Cross
          </div>
          <div className="sol_guide_img" role="img" aria-label="step4-img">
            <img className="sol_img_all sol_img_3xcube" src="./img/solution/threexcube/Rubiks3xSolu_step4.png" alt="3x Cube Solution Step 4" />
          </div>
          {/* step 5 */}
          <div className="sol_guide_step" aria-label="step 5">
              <img src="./img/solution/step/step5.png" alt="Step 5" />
          </div>
          <div className="sol_guide_text">
            Solve the Yellow Face
          </div>
          <div className="sol_guide_img" role="img" aria-label="step5-img">
            <img className="sol_img_all sol_img_3xcube" src="./img/solution/threexcube/Rubiks3xSolu_step5.png" alt="3x Cube Solution Step 5" />
          </div>
          {/* step 6 */}
          <div className="sol_guide_step" aria-label="step 6">
              <img src="./img/solution/step/step6.png" alt="Step 6" />
          </div>
          <div className="sol_guide_text">
            Position The Yellow Corners and Yellow Edges
          </div>
          <div className="sol_guide_img" role="img" aria-label="step6-img">
            <img className="sol_img_all sol_img_3xcube" src="./img/solution/threexcube/Rubiks3xSolu_step6.png" alt="3x Cube Solution Step 6" />
          </div>
      </div>
    </div>

  );
}
  
export default Solution3xCube;

 