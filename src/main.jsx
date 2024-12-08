import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App'; // Import du composant App depuis src/app/App.jsx

// Changer l'arrière-plan en noir
document.body.style.backgroundColor = 'black';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Utilisation du composant App */}
  </React.StrictMode>
);
