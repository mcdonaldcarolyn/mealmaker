import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/rootReducer";
import firebase from './firebase.js';
import thunk from 'redux-thunk';

const Store = createStore(rootReducer, compose(
  applyMiddleware(thunk.withExtraArgument({ getFirestore })),
  reduxFirestore(firebase)
))

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
// registerServiceWorker();
