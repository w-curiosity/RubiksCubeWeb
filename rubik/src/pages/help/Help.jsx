import React, { useState }  from "react";

import HelpTabs from './HelpTabs';

import './help.css';

const tabContents = {
  'Introduction': `
  Welcome to our site! 
  We're dedicated to providing you the best Rubik's Cube experience and tools,  
  with a focus on stopwatch, Rubik's Cube World Records, Rubik's Cube Solution.
  `,
  'Stopwatch': `
  Stopwatch for Rubiks's Cube. 
  You can record your solution time and submit your records here.
  Your best result and average result will be record.
  Compete with other cuber! Enjoy your time!
  `,
  'Records': `
  The latest World Reocrds for Rubik's Cube, including 3x3x3 Cube, 2x2x2 Cube,
  4x4x4 Cube, 5x5x5 Cube, 6x6x6 Cube, 7x7x7 Cube, 3x3x3 Blidfolded, 
  3x3x3 Fewest Moves, 3x3x3 One-handed, Clock, Megaminx, Pyraminx and Skewb.
  `,  
  'Solution': `
  The Solution Guide for Edge, 3x3x3 Cube, 2x2x2 Cube, 4x4x4 Cube and 5x5x5 Cube. 
  Explain the steps in detail. Try it know!
  ` ,
  'Others': `
  If you have any questions, You can contact us by email.
  ` 
}

function Help() {

  const [conts] = useState(tabContents);

  return (
    <div className="help_cont">
      <h1>Help Center</h1>
      <HelpTabs entries={conts}/>
    </div>
  );

}
  
export default Help;

  