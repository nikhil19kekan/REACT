import React from "react";
import "./App.css";
import Main from "./components/main";
import { createStore, applyMiddleware } from "redux";
//import { thunk } from "redux-thunk";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./components/reducer";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header"></header>
        <Main />
      </div>
    </Provider>
  );
}

export default App;
