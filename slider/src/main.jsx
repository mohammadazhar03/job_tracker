import React from "react";
import ReactDom from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Alternate from './Alternate1.jsx'

const root=ReactDom.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Alternate></Alternate>
    </React.StrictMode>
)

