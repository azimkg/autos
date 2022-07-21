import React from "react";
import "./App.css";
import "antd/dist/antd.css"; // import 'antd/dist/antd.css'; //

import Routing from "./components/Routing";
import PartsContextProvider from "./partsContext";
import FavContextProvider from "./favContext";
import AuthContextProvider from "./authContext";

function App() {
  return (
    <AuthContextProvider>
      <PartsContextProvider>
        <FavContextProvider>
          <Routing />
        </FavContextProvider>
      </PartsContextProvider>
    </AuthContextProvider>
  );
}

export default App;
