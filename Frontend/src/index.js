import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/navbar';
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from './utils/Theme';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={Theme} >
    <Navbar/>
    <App />
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

