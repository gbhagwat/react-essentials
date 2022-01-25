import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

//takes element you want to create as first argument (tag, properties, message)
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);
