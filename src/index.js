import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Projects />
  </React.StrictMode>
);

reportWebVitals();
