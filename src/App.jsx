import React from "react";
import RoutesMain from "./routes/RoutesMain";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <h1>inicio de portafolio-v2 xdxd</h1> */}
      <BrowserRouter>
        <RoutesMain />
      </BrowserRouter>
    </>
  );
};

export default App;
