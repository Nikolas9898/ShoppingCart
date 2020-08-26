import React from "react";
import "./App.css";
import Header from "./client/desktop/layout/header/Header";
import HomePage from "./client/desktop/pages/home/HomePage";
import FavouritesPage from "./client/desktop/pages/favourites/FavouritesPage";
import NotFoundPage from "./client/desktop/pages/notFound/NotFound";
import { Provider } from "react-redux";
import store from "./reduxStore/store";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/favourites" component={FavouritesPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
