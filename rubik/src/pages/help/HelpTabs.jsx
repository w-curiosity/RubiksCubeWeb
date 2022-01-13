import React, { useState }  from "react";

import './help.css';

function HelpTabs({ entries }) {

    const [isEntryOpen, setIsEntryOpen] = useState({});

    // set the first tab default
    if (JSON.stringify(isEntryOpen) === "{}") {
        isEntryOpen.Introduction = true;
    }

    // operate when click
    function toggleEntry(title) {
        // close all other than 'title'
        for (let key in isEntryOpen) {
            if(key!==title) {
                isEntryOpen[key] = false;
            }
        }
        // open the chosen one
        setIsEntryOpen({
        ...isEntryOpen,
        [title]: true,
        });
    }

    return (
      <div className="help_tabs">
        { Object.keys(entries).map( title => {
            let isOpen = isEntryOpen[title];
            return (
                <div
                key={title}
                className={`tabs__entry ${isOpen ? 'tabs__entry--open' : '' }`}
                >
                <button
                    className="tabs__title"
                    onClick={ () => toggleEntry(title) }
                >
                {title}
                </button>
                    <div className="tabs__body">{entries[title]}</div>
                </div>
            );
        })}

      </div>
    );
  }
  
export default HelpTabs;

