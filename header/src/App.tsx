import React from "react";
import ReactDOM from "react-dom";
import AppFooter from "./components/Footer";
import AppHeader from "./components/Header";

import "./index.scss";

const App = () => (
  <>
    <AppHeader app={{name : 'Ecom App'}}/>
      <div>Container</div>
    <AppFooter/>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
