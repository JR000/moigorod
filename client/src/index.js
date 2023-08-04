import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { ErrorPage } from './components/ErrorPage';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import { BuildingMap } from './components/BuildingMap/BuildingMap';
import { App } from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
