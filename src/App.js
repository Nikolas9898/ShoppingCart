import React from "react";
import "./App.css";
import Header from "./client/desktop/layout/header/Header";
import HomePage from "./client/desktop/pages/home/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
