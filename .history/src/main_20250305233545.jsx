import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App.jsx';

import LocomotiveScroll from 'locomotive-scroll';

const scrollOptions = {
  smooth: true,
};

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <LocomotiveScroll options={scrollOptions} container={document.querySelector("[data-scroll-container]")}>
          <App />
        </LocomotiveScroll>
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
