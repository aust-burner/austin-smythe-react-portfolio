import React, { Component } from "react";
import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PortfolioContainer from "./portfolio/portfolio-container";
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog"

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <NavigationContainer />
        <Router>
          <div>
          

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-me" component={About} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Blog" component={Blog} />
            </Switch>
          </div>
        </Router>

        <h1>Austin Smythe Portfolio</h1>
        <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
        <PortfolioContainer />
        </div>
      
    );
  }
}
