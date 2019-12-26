import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  decrementAction,
  resetAction,
  incrementAction
} from "../actions/actions";

function mapStoreToProps(state: any) {
  return {
    count: state.count
  };
}

function Main(props: any) {
  console.log(props);

  return (
    <React.Fragment>
      <button
        onClick={() => {
          props.dispatch(decrementAction());
        }}
      >
        -
      </button>
      <span>{props.count}</span>
      <button
        onClick={() => {
          props.dispatch(incrementAction());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          props.dispatch(resetAction());
        }}
      >
        RESET
      </button>
    </React.Fragment>
  );
}
// this line below wraps our component to create a component that connects to redux store
// whatever we put inside first brackets gets mapped to props for the component that is mentioned in second brackets eg: mapStoreToProps
export default connect(mapStoreToProps)(Main);
