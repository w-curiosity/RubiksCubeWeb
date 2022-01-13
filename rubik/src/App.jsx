import React from "react";

import './app.css';

import { Nav, Footer } from './layout/layout';
import { Home, Stopwatch, Records, Solution, About, Help, Terms, Privacy, SolutionEdge, Solution2xCube, Solution3xCube, Solution4xCube, Solution5xCube, SolutionMore } from './pages/pages';
import Route from "./components/Route";

function App() {
  return (
    <div className="app">
        <header>
          <Nav />
        </header>
        <main>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/stopwatch">
            <Stopwatch />
          </Route>
          <Route path="/records">
            <Records />
          </Route>
          <Route path="/solution">
            <Solution />
          </Route>
              <Route path="/edge-solution-guide">
                <SolutionEdge />
              </Route>
              <Route path="/2xcube-solution-guide">
                <Solution2xCube />
              </Route>
              <Route path="/3xcube-solution-guide">
                <Solution3xCube />
              </Route>
              <Route path="/4xcube-solution-guide">
                <Solution4xCube />
              </Route>              
              <Route path="/5xcube-solution-guide">
                <Solution5xCube />
              </Route>
              <Route path="/more-solution-guide">
                <SolutionMore />
              </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
        </main>
        <footer>
          <Footer />
        </footer>
    </div>
  );
}


export default App;
