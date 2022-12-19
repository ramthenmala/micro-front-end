import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const Header = React.lazy(() => import("PageComponents/Header"));
// const AppFooter = React.lazy(() => import("PageComponents/Footer"));

// import AppHeader from "PageComponents/Header";
import AppFooter from "PageComponents/Footer";

const App = () => {
  const [showHeader, setShowHeader] = useState<boolean>(false)
  return (
    <>
      {
        showHeader && <Suspense fallback={<div>Loading</div>}>
        <Header />
      </Suspense>
      }
      <button onClick={() => setShowHeader(!showHeader)}>Show header</button>
      <div>Front End</div>
      <AppFooter />
    </>
  )
}
ReactDOM.render(<App />, document.getElementById("app"));
