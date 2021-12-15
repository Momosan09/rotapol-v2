import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Middle from './Middle';
import Admin from './Admin';
import Contact from './Contact';

import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/middle" element={<Middle />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
