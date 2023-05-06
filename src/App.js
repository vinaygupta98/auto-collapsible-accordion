import React from "react";
import MainPage from "./MainPage";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        background: "lightgreen",
      }}>
      <h2>Auto collapsible accordion</h2>
      <MainPage />
    </div>
  );
};

export default App;
