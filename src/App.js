import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { history } from "./history";
import Main from "./Main";
import { Provider } from "react-redux";
import store from "./store";

const App = () =>
  ReactDOM.render(
    <Router history={history}>
      <Provider store={store}>
        <Main />
      </Provider>
    </Router>,
    document.getElementById("root")
  );

export default App;
