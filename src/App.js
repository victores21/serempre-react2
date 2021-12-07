import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//i18n

import useViews from "./views";

const App = () => {
  const { Home } = useViews();

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
