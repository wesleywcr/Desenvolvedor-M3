import React from 'react';
import ReactDOM from 'react-dom';
import { CartProvider } from '../contexts/CartContext';
import App from './App';
import './styles/global.css'


ReactDOM.render(
  <CartProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </CartProvider>,
  document.getElementById('root')
);


