import {useState} from 'react';
import './records.css';

import '../../cssicon/cubing-icons/cubing-icons.css'
import '../../cssicon/flag-icons/flag-icons.css'

function WorldRecords({content}) {
    // setup the state
    const [isEntryOpen, setIsEntryOpen] = useState({});

    // how to change the State
    function toggleEntry(title) {
        setIsEntryOpen({
            ...isEntryOpen,
            [title]: !isEntryOpen[title],
        });
    }

    return (
      <div className = "accordion">
        {
            content.map((element,index)=> {
                return (
                    <div 
                        key={element[0]} 
                        className={ `accordion__entry ${isEntryOpen[element[0]] ? "" : `accordion__entry--open`}`}
                    >
                        <button 
                            className="accordion__title"
                            // connnect to html
                            onClick = {()=> toggleEntry(element[0])}
                            aria-expanded="true"
                        >
                            <i className={element[1]} role="icon" aria-label="Rubik's Cube Icon"></i>
                            {element[0]}
                        </button>
                        <table className="accordion__body">
                            <thead className="table__header">
                                <tr>
                                    <th className="type"> Type </th>
                                    <th className="name"> Name </th>
                                    <th className="result"> Result </th>
                                    <th className="country"> Citizen </th>
                                    <th className="competition"> Competition </th>
                                    <th className="solves"> Solves </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="tbody__single">
                                    <td className="type "> Single </td>
                                    <td className="name">{element[2][0]}</td>
                                    <td className="result">{element[2][1]}</td>
                                    <td className="country"> 
                                        <i className={element[2][2]} aria-label="national flag"></i> 
                                        {element[2][3]} 
                                    </td>
                                    <td className="competition"> 
                                        <i className={element[2][4]} aria-label="national flag"></i> 
                                        {element[2][5]} 
                                    </td>
                                    <td className="solves"> {element[2][6]} </td>
                                </tr>
                                <tr className="tbody__average">
                                    <td className="type "> Average </td>
                                    <td className="name">{element[3][0]}</td>
                                    <td className="result">{element[3][1]}</td>
                                    <td className="country"> 
                                        <i className={element[3][2]} aria-label="national flag"></i> 
                                        {element[3][3]} 
                                    </td>
                                    <td className="competition"> 
                                        <i className={element[3][4]} aria-label="national flag"></i> 
                                        {element[3][5]} 
                                    </td>
                                    <td className="solves"> {element[3][6]} </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
            })
        }
      </div>
    );
}

export default WorldRecords;


