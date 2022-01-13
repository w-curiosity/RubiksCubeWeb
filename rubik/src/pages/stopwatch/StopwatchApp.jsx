import React, { useState } from "react";

import Timer from "./Timer";
import ControlButtons from "./ControlButtons";
import CurrRecords from "./CurrRecords";
import LocalRecordAddForm from "./LocalRecordAddForm";


import './stopwatch.css';

function StopwatchApp() {

  // stopwatch variable
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  // records variable
  const [records, setRecords] = useState([]);
  const [avgRecord, setAvgRecord] = useState(0);
  const [fastestRecord, setFastestRecord] = useState(0);
  const [slowestRecord, setSlowestRecord] = useState(0);

  // clear loading
  const [loadingState, setLoadingState] = useState(false);

  // stopwatch function
  React.useEffect(() => {
    let interval = null;
  
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);
  
  // handle start stopwatch
  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  // handle pause/reset stopwatch
  const handlePauseReset = () => {
    if (isActive && isPaused === false) {
      setIsActive(false);
      setIsPaused(true);
    } else {
      if( time !== 0 ) {
        updateRecords();
        setTime(0);
      }
    }
  };

  // records process, get avg, max, min
  const updateRecords = () => {
    // save Records up to 10 temps
    setRecords(records => [...records, [time]]);
    // get avg, max, min
    setAvgRecord(Math.round((avgRecord*records.length+time)/(records.length+1)));
    setFastestRecord(Math.min(...records, time));
    setSlowestRecord(Math.max(...records, time));
  };

  // handle clear records
  const handleClear = () => {
    setLoadingState(true);
    //Faking Waiting here
    setTimeout(() => {
        setLoadingState(false);
        // operate clear
        setTime(0);
        setRecords([]);
        setAvgRecord(0);
        setFastestRecord(0);
        setSlowestRecord(0);
    }, 2000)
  };

  return (
      <div className="stopwatch-app">
        <Timer time={time} />
        <ControlButtons
          active={isActive}
          isPaused={isPaused}
          handleStart={handleStart}
          handlePauseReset={handlePauseReset}
          handleClear={handleClear}
          loadingState={loadingState}
        />
        <CurrRecords 
          time={time}
          records={records}
          avgRecord={avgRecord}
          fastestRecord={fastestRecord}
          slowestRecord={slowestRecord}
        />

        <LocalRecordAddForm 
          avgRecord={avgRecord}
          fastestRecord={fastestRecord}
          slowestRecord={slowestRecord}
        />

      </div>
  );
}
  
export default StopwatchApp;
