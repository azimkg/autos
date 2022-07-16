import React from "react";
import "./App.css";
import "antd/dist/antd.css"; // import 'antd/dist/antd.css'; //

import Routing from "./components/Routing";
import PartsContextProvider from "./partsContext";
import FavContextProvider from "./favContext";
function App() {
  return (
    <PartsContextProvider>
      <FavContextProvider>
        <Routing />
      </FavContextProvider>
    </PartsContextProvider>
  );
}

export default App;
