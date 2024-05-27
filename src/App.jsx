import React from "react";
import RoutesMain from "./routes/RoutesMain";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      {/* <h1>inicio de portafolio-v2 xdxd</h1> */}
      <BrowserRouter>
        <RoutesMain />
      </BrowserRouter>
    </div>
  );
};

export default App;
