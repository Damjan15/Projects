import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from "./context/stateProvider";
import reducer, { initialState } from "./context/reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <Router>
      <App />
    </Router>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

