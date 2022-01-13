import React from "react";

import './nav.css';

function Nav() {

    // change the State
    function toggleLocation(theURL) {
        const pathname = window.location.pathname;
        const splitUrl = pathname.split('/');
        if(splitUrl[1] === theURL) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className="navigation">
            <a href="/" className="logo" role="img" aria-label="Rubik logo">
                <img src="./img/layout/RubikLogo.png" alt="Rubik logo" />
            </a>
            <nav className="menubar" aria-label="Main menu">
                <ul className="menu">
                    <li id="home">
                        <a href="/">
                            <span className={ `menu_section ${toggleLocation("") ? `menu_section--open` : ""}`}>Home</span>
                        </a>
                    </li>
                    <li id="stopwatch">
                        <a href="/stopwatch">
                            <span className={ `menu_section ${toggleLocation("stopwatch") ? `menu_section--open` : ""}`}>Stopwatch</span>
                        </a>
                    </li>
                    <li id="records">
                        <a href="/records">
                            <span className={ `menu_section ${toggleLocation("records") ? `menu_section--open` : ""}`}>Records</span>
                        </a>
                    </li>
                    <li id="solut" role="menu">
                        <a className="solut-menu" href="/solution">
                            <span className={ `menu_section ${toggleLocation("solution") ? `menu_section--open` : ""}`}>Solution</span>
                        </a>
                        <div className="submenu">
                            <ul className="submenu-list">
                                <li role="menuitem"><a href="/edge-solution-guide">EDGE SOLUTION GUIDE</a><i></i></li>
                                <li role="menuitem"><a href="/2xcube-solution-guide">2x2x2 SOLUTION GUIDE</a><i></i></li>
                                <li role="menuitem"><a href="/3xcube-solution-guide">3x3x3 SOLUTION GUIDE</a><i></i></li>
                                <li role="menuitem"><a href="/4xcube-solution-guide">4x4x4 SOLUTION GUIDE</a><i></i></li>
                                <li role="menuitem"><a href="/5xcube-solution-guide">5x5x5 SOLUTION GUIDE</a><i></i></li>
                            </ul>
                            <img className="submenu-img" src="./img/layout/SolNav.png" alt="Rubik Cube Solution" role="img" aria-label="Solution image" />
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
  
export default Nav;

  