import React from "react";

import './solutionGuide.css';

function SolutionEdge() {
    return (
      <div className="sol_cont">

        <div className="return-solut">
            <a href="/solution">
                <span> Solution &gt; </span>
            </a>
            <span>Edge Solution Guides</span>
        </div>

        <h1>Solve the Rubik's Edge</h1>
        <p>Solving the Edge of Rubik's Cube is the first step to solving a whole Cube. Let's get started!</p>

        <div className="sol_guide">
            {/* step 1 */}
            <div className="sol_guide_step" aria-label="step 1">
                <img src="./img/solution/step/step1.png" alt="Step 1" />
            </div>
            <div className="sol_guide_text">
                Confirm the center of white face 
            </div>
            <div className="sol_guide_img" role="img" aria-label="step1-img">
                <img className="sol_img_all sol_img_edge" src="./img/solution/edge/RubiksEdgeSolu_step1.png" alt="Edge Solution Step 1" />
            </div>
            {/* step 2 */}
            <div className="sol_guide_step" aria-label="step 2">
                <img src="./img/solution/step/step2.png" alt="Step 2" />
            </div>
            <div className="sol_guide_text">
                Make the small while L 
            </div>
            <div className="sol_guide_img" role="img" aria-label="step2-img">
                <img className="sol_img_all sol_img_edge" src="./img/solution/edge/RubiksEdgeSolu_step2.png" alt="Edge Solution Step 2" />
            </div>
            {/* step 3 */}
            <div className="sol_guide_step" aria-label="step 3">
                <img src="./img/solution/step/step3.png" alt="Step 3" />
            </div>
            <div className="sol_guide_text">
                Make the White Cross 
            </div>
            <div className="sol_guide_img" role="img" aria-label="step3-img">
                <img className="sol_img_all sol_img_edge" src="./img/solution/edge/RubiksEdgeSolu_step3.png" alt="Edge Solution Step 3" />
            </div>
            {/* step 4 */}
            <div className="sol_guide_step" aria-label="step 4">
                <img src="./img/solution/step/step4.png" alt="Step 4" />
            </div>
            <div className="sol_guide_text">
                Match the sides to all one color
            </div>
            <div className="sol_guide_img" role="img" aria-label="step4-img">
                <img className="sol_img_all sol_img_edge" src="./img/solution/edge/RubiksEdgeSolu_step4.png" alt="Edge Solution Step 4" />
            </div>
            {/* step 5 */}
            <div className="sol_guide_step" aria-label="step 5">
                <img src="./img/solution/step/step5.png" alt="Step 5" />
            </div>
            <div className="sol_guide_text">
                Solve the white face
            </div>
            <div className="sol_guide_img" role="img" aria-label="step5-img">
                <img className="sol_img_all sol_img_edge" src="./img/solution/edge/RubiksEdgeSolu_step5.png" alt="Edge Solution Step 5" />
            </div>

        </div>
      </div>
    );
}

export default SolutionEdge;
