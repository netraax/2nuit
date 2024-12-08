import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App'; // Import du composant App depuis src/app/App.jsx

document.body.style.backgroundColor = 'white';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Utilisation du composant App */}
  </React.StrictMode>
);
