import React from "react";
import "./App.css";
import Header from "./client/desktop/layout/header/Header";
import HomePage from "./client/desktop/pages/home/HomePage";
import { Provider } from "react-redux";
import store from "./reduxStore/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
