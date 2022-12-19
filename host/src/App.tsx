import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import AppFooter from "PageComponents/Footer";
import AppHeader from "PageComponents/Header";

const App = () => (
  <>
    <AppHeader/>
      <div>Front End</div>
    <AppFooter/>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
