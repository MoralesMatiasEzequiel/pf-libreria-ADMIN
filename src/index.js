import "./index.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./redux/store"
import axios from "axios"
import 'bootstrap-icons/font/bootstrap-icons.css';

axios.defaults.baseURL = "http://localhost:3001/";
// axios.defaults.baseURL = "https://server-plumalibreria.onrender.com";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
);
