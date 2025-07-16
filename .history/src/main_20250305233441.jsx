import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App.jsx';

import LocomotiveScroll from 'locomotive-scroll';

const scrollOptions = {
  // Add any necessary options for LocomotiveScroll here
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <LocomotiveScroll options={scrollOptions}>
        <App />
      </LocomotiveScroll>
    </BrowserRouter>
  </React.StrictMode>
);
