import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//i18n

import useView from "./views";

const App = () => {
  const { Home } = useView();

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
