/**
 * Application entry point.
 */

// Global application styles
import "src/app.scss";

// React
import React from "react";
import {render} from "react-dom";
import { createStore } from 'redux';

// Our app
import App       from "./app/App";
import Root from "./Router";
import configStore from '../store/configStore';

const store = configStore();
debugger;
render((
  <Root store={store} />
), document.getElementById("root"));
