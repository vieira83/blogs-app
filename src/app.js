/**
 * Application entry point.
 */

// Global application styles
import "src/app.scss";
import 'bootstrap/dist/css/bootstrap.css';

import { Button, Panel } from 'react-bootstrap';
// React
import React from "react";
import {render} from "react-dom";
import { createStore } from 'redux';

// Our app
import App       from "./app/App";
import Root from "./Router";
import configStore from '../store/configStore';

const store = configStore();
render((
  <Root store={store} />
), document.getElementById("root"));
