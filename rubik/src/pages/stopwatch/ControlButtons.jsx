import React from "react";

import "./stopwatch.css";
import '../../cssicon/fontawesome/css/all.css'
  
function ControlButtons(props) {

  return (
    <div className="control-btns">

        <div className="btn-group">
            <button className="btn"
                onClick={props.handleStart}
                aria-label="start button">
                Start
            </button>
            <button className="btn" 
                onClick={props.handlePauseReset}
                aria-label="pause button">
                    {!props.isPaused ? "Pause" : "Reset"}
            </button>

            <button className="btn clear-btn" role="status"
                onClick={props.handleClear}
                disabled={props.loadingState}
                aria-label="clear button"
            >
                {props.loadingState && (
                    <i id="loading" className="fas fa-sync-alt"></i>
                )}
                {props.loadingState && <span role="alert" aria-busy="true">Clearing</span>}
                {!props.loadingState && <span>Clear</span>}
            </button>

        </div>
        <div className="btn-dir">
            Click <span className="highlight">Start</span> to start, 
            Click <span className="highlight">Pause/Reset</span> to pause/reset and record,
            Click <span className="highlight">Clear</span> to clear all records
        </div>
    </div>
  );
}


export default ControlButtons;
