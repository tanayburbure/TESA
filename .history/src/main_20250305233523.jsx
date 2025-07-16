import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App.jsx';

import LocomotiveScroll from 'locomotive-scroll';

const scrollOptions = {
  smooth: true,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LocomotiveScroll options={scrollOptions} container={document.querySelector("[data-scroll-container]")}>
        <App />
      </LocomotiveScroll>
    </BrowserRouter>
  </React.StrictMode>
);
