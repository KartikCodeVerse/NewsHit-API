import "./App.css";

import React, { Component } from "react";
import NavBar from "./Component/NavBar";
import News from "./Component/News";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 10;
  API = "a52ac33529f64cd2b9b284fbb9221ea8";

  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />
          <NavBar />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <News
                  setProgress={this.setProgress}
                  key="general"
                  pageSize={this.pageSize}
                  country="in"
                  category="general"
                  API={this.API}
                />
              }
            />
            <Route
              path="/business"
              exact
              element={
                <News
                  setProgress={this.setProgress}
                  key="business"
                  pageSize={this.pageSize}
                  country="in"
                  category="business"
                  API={this.API}
                />
              }
            />
            <Route
              path="/entertainment"
              exact
              element={
                <News
                  setProgress={this.setProgress}
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="in"
                  category="entertainment"
                  API={this.API}
                />
              }
            />
            <Route
              path="/health"
              exact
              element={
                <News
                  setProgress={this.setProgress}
                  key="health"
                  pageSize={this.pageSize}
                  country="in"
                  category="health"
                  API={this.API}
                />
              }
            />
            <Route
              path="/science"
              exact
              element={
                <News
                  setProgress={this.setProgress}
                  key="science"
                  pageSize={this.pageSize}
                  country="in"
                  category="science"
                  API={this.API}
                />
              }
            />
            <Route
              path="/sports"
              exact
              element={
                <News
                  setProgress={this.setProgress}
                  key="sports"
                  pageSize={this.pageSize}
                  country="in"
                  category="sports"
                  API={this.API}
                />
              }
            />
            <Route
              path="/technology"
              exact
              element={
                <News
                  setProgress={this.setProgress}
                  key="technology"
                  pageSize={this.pageSize}
                  country="in"
                  category="technology"
                  API={this.API}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
