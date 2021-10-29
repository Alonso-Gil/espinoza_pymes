import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Actualmente Material UI no interactia bien con el ScrictMode
// Comentado hasta que sea actualizado.

ReactDOM.render(
  // <React.StrictMode></React.StrictMode>
    <App />,
  document.getElementById('root')
);