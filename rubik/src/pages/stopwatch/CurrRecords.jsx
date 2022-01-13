import React from "react";

import "./stopwatch.css";

function getFormat(num) {
    return ("0" + Math.floor((num / 60000) % 60)).slice(-2) + ":" + ("0" + Math.floor((num / 1000) % 60)).slice(-2) + "." +  ("0" + Math.floor((num / 10) % 100)).slice(-2);
}

function CurrRecords(props) {
  return (
    <div className="currRecords">
        <div className='record__content'>
            {   
                props.records.map ((record,index) => {
                    return(
                        <div className='record__col' key={index}>
                            <div className='record__index'>{index+1}</div>
                            <div className="record__time">
                                <span>{
                                    ("0" + Math.floor((record / 60000) % 60)).slice(-2)}:
                                </span>
                                <span>
                                    {("0" + Math.floor((record / 1000) % 60)).slice(-2)}.
                                </span>
                                <span>
                                    {("0" + ((record / 10) % 100)).slice(-2)}
                                </span>
                            </div>
                        </div>
                    );
                })
            }
        </div>
        <div className="record__avg">
            Average: 
            <div className="record__digits">
                <span>
                    {getFormat(props.avgRecord)}
                </span>
            </div>
        </div>
        <div className="record__fastest">
            Fastest:
            <div className="record__digits">
                <span>
                    {getFormat(props.fastestRecord)}
                </span>
            </div>
        </div>
        <div className="record__slowest">
            Slowest:
            <div className="record__digits">
                <span>
                    {getFormat(props.slowestRecord)}
                </span>
            </div>
        </div>
    </div>
  );
}


export default CurrRecords;

  