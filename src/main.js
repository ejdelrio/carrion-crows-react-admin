import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import createAppStore from './lib/create-store.js';
import App from './components/app';
import './style/reset/reset.scss';

let store = createAppStore();
let createApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)
ReactDom.render(createApp(), document.getElementById('root'));
