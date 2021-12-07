import React, { Suspense } from "react";

//i18n

import useViews from "./views";

const App = () => {
  const { Home } = useViews();
  return <Home />;
};

export default App;
