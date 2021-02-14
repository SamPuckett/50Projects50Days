import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/0-Home/Home";
import ExpandingCards from "./components/1-ExpandingCards/ExpandingCards";
import ProgressSteps from "./components/2-ProgressSteps/ProgressSteps";
import RotationNavigation from "./components/3-RotationNavigation/RotationNavigation";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/expanding-cards">
            <ExpandingCards />
          </Route>
          <Route exact path="/progress-steps">
            <ProgressSteps />
          </Route>
          <Route exact path="/rotation-navigation">
            <RotationNavigation />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
