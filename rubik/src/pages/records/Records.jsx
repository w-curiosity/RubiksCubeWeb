import React from "react";
import { useState } from 'react';

import WorldRecords from './WorldRecords';

import './records.css';

// content
const worldRecordsContents = [
  ["3x3x3 Cube",  // type
    "cubing-icon event-333",  // icon
    ["Yusheng Du", "3.47", "flag-icon flag-icon-cn", "China", "flag-icon flag-icon-cn", "Wuhu Open 2018", ""],  // records details
    ["Max Park", "5.32", "flag-icon flag-icon-us", "United States", "flag-icon flag-icon-us", "Missoula 2021", "5.34 5.50 5.12 (4.54) (5.96)"]
  ],
  ["2x2x2 Cube", 
    "cubing-icon event-222",
    ["Maciej Czapiewski", "0.49", "flag-icon flag-icon-pl", "Poland", "flag-icon flag-icon-pl", "Grudziądz Open 2016", ""],
    ["Zayn Khanani", "1.05", "flag-icon flag-icon-us", "United States", "flag-icon flag-icon-fi", "Finnish Championship 2021", "1.07 (1.77) 1.08 1.01 (0.88)"]
  ],
  ["4x4x4 Cube", 
    "cubing-icon event-444",
    ["Sebastian Weyer", "17.42", "flag-icon flag-icon-de", "Germany", "flag-icon flag-icon-dk", "Danish Open 2019", ""],
    ["Max Park", "20.94", "flag-icon flag-icon-us", "United States", "flag-icon flag-icon-us", "Missoula 2021", "(19.77) (24.98) 20.82 20.12 21.88"]
  ],  
  ["5x5x5 Cube", 
    "cubing-icon event-555",
    ["Max Park", "34.92", "flag-icon flag-icon-us", "United States", "flag-icon flag-icon-us", "Houston Winter 2020", ""],
    ["Max Park", "39.65", "flag-icon flag-icon-us", "United States", "flag-icon flag-icon-us", "CubingUSA Western Championship 2019", "40.34 (36.06) (42.65) 40.82 37.80"]
  ],
  ["6x6x6 Cube", 
    "cubing-icon event-666",
    ["Max Park", "1:09.51", "flag-icon flag-icon-us", "United States", "flag-icon flag-icon-us", "Houston Winter 2020", ""],
    ["Max Park", "1:15.90", "flag-icon flag-icon-us", "United States", "flag-icon flag-icon-us", "Houston Winter 2020", "1:09.51 1:23.93 1:14.27"]
  ],
  ["7x7x7 Cube", 
    "cubing-icon event-777",
    ["Max Park", "1:40.89", "flag-icon flag-icon-us", "United States", "flag-icon flag-icon-us", "CubingUSA Nationals 2019", ""],
    ["Max Park", "1:46.57", "flag-icon flag-icon-us", "United States", "flag-icon flag-icon-us", "Houston Winter 2020", "1:54.24 1:42.12 1:43.34"]
  ],
  ["3x3x3 Blindfolded", 
    "cubing-icon event-333bf",
    ["Tommy Cherry", "15.27	", "flag-icon flag-icon-us", "United States", "flag-icon flag-icon-us", "Florida Returns 2021", ""],
    ["Jeff Park", "18.18", "flag-icon flag-icon-us", "United States", "flag-icon flag-icon-us", "OU Winter 2019", "16.77 18.32 19.44"]
  ],
  ["3x3x3 Fewest Moves", 
    "cubing-icon event-333fm",
    ["Sebastiano Tronto", "16", "flag-icon flag-icon-it", "Italy", "flag-icon flag-icon-xx", "FMC 2019", ""],
    ["Cale Schoon", "21", "flag-icon flag-icon-us", "United States", "flag-icon flag-icon-us", "North Star Cubing Challenge 2020", "23 18 22"]
  ],
  ["3x3x3 One-Handed", 
    "cubing-icon event-333oh",
    ["Max Park", "6.82", "flag-icon flag-icon-us", "United States", "flag-icon flag-icon-us", "Bay Area Speedcubin'20 2019", ""],
    ["Max Park", "9.34", "flag-icon flag-icon-us", "United States", "flag-icon flag-icon-us", "Missoula 2021", "(7.91) 9.55 (10.91) 8.82 9.65"]
  ],
  ["Clock", 
    "cubing-icon event-clock",
    ["Yunhao Lou", "2.87", "flag-icon flag-icon-cn", "China", "flag-icon flag-icon-cn", "Guangdong Open 2021", ""],
    ["Yunhao Lou", "3.86", "flag-icon flag-icon-cn", "China", "flag-icon flag-icon-cn", "Guangzhou Good Afternoon 2020", "(3.52) 4.28 (4.57) 3.54 3.76"]
  ],
  ["Megaminx", 
    "cubing-icon event-minx",
    ["Juan Pablo Huanqui", "27.22", "flag-icon flag-icon-pe", "Peru", "flag-icon flag-icon-pe", "La Tienda Cubera Christmas 2019", ""],
    ["Juan Pablo Huanqui", "30.39", "flag-icon flag-icon-pe", "Peru", "flag-icon flag-icon-cn", "Wuxi Open 2019", "30.12 (28.50) (31.19) 29.97 31.07"]
  ],
  ["Pyraminx", 
    "cubing-icon event-pyram",
    ["Dominik Górny", "0.91", "flag-icon flag-icon-pl", "Poland", "flag-icon flag-icon-pl", "Byczy Cube Race 2018", ""],
    ["Tymon Kolasiński", "1.83", "flag-icon flag-icon-pl", "Poland", "flag-icon flag-icon-pl", "Lubelska Liga Speedcubingu II Biała Podlaska 2021", "1.66 (2.86) 1.87 (1.65) 1.97"]
  ],
  ["Skewb", 
    "cubing-icon event-skewb",
    ["Andrew Huang", "0.93", "flag-icon flag-icon-au", "Australia", "flag-icon flag-icon-au", "WCA World Championship 2019", ""],
    ["TŁukasz Burliga", "2.03", "flag-icon flag-icon-pl", "Poland", "flag-icon flag-icon-pl", "CFL Santa Claus Cube Race 2017", "2.48 1.91 1.71 (1.39) (4.98)"]
  ]
];


function Records() {

  const [worldrecordconts] = useState(worldRecordsContents);

    return (
      <div className="records">

        <h1>World Records</h1>

        <div className="content">
          <WorldRecords content={worldrecordconts} />
        </div>

        <div className="updatetime">
          <span>Update in December 2021</span>
        </div>

      </div>
    );
  }
  
export default Records;

  