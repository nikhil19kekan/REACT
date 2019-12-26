import React from "react";
import "./App.css";
import Main from "./components/main";
import { createStore, applyMiddleware } from "redux";
//import { thunk } from "redux-thunk";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

//------------------------REDUX & THUNK----------------------
const initialState = {
  count: 0
};
function reducer(state = initialState, action) {
  console.log("reducer", state, action);
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
      break;

    case "DECREMENT":
      return {
        count: state.count - 1
      };
      break;

    case "RESET":
      return initialState;
      break;

    default:
      break;
  }
  return state;
}
const store = createStore(reducer, applyMiddleware(thunk));
//------------------------REDUX & THUNK----------------------

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
