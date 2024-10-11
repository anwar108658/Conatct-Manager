import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './component/Context/ContextProduct';
import {FilterProductContext} from './component/Context/filterProduct'
import {CartProvider} from './component/Context/AddCartProduct'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <FilterProductContext>
        <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
      </FilterProductContext>
    </AppProvider>
  </React.StrictMode>
);

