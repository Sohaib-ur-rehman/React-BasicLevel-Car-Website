import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import home from "./pages/home";
import cars from "./pages/cars";
import Reviews from "./pages/reviews";
import aboutus from "./pages/aboutus";
import support from "./pages/support";
import followus from "./pages/followus";
function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/home" exact component={home} />
        <Route path="/" exact component={home} />
        <Route path="/reviews" exact component={Reviews} />
        <Route path="/followus" exact component={followus} />
        <Route path="/cars" exact component={cars} />
        <Route path="/aboutus" exact component={aboutus} />
        <Route path="/support" exact component={support} />
      </Switch>
    </Router>
  );
}

export default App;
