import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import AppHeader from "PageComponents/Header";
import AppFooter from "PageComponents/Footer";

import SafeComponent from "./SafeComponent";

const App = () => {
  const [showHeader, setShowHeader] = useState<boolean>(false)
  return (
    <>
      <SafeComponent>
        <AppHeader />
      </SafeComponent>
      <button onClick={() => setShowHeader(!showHeader)}>Show header</button>
      <div>Front End</div>
      <AppFooter />
    </>
  )
}
ReactDOM.render(<App />, document.getElementById("app"));
