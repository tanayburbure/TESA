import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App.jsx';

import LocomotiveScroll from 'locomotive-scroll';

// const locomotiveScroll = new LocomotiveScroll();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <locomotiveScroll> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </locomotiveScroll> */}
  </React.StrictMode>
);
