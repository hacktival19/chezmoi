import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HistoryView} from './HistoryView';
import CreateEvent from './create_event';
import * as serviceWorker from './serviceWorker';
import { WebsocketStore } from './services/websocketStore';
import {User} from './models/user';
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({ typography: { useNextVariants: true } });
const websocketStore = new WebsocketStore();


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <HistoryView />
  </ThemeProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

//create new js file
//implement class
//here load our file instea of App
//material ui form