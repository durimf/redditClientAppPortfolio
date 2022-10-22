import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter
  
} 

from "react-router-dom";
import darkTheme from '../src/styles/styles'
import { ThemeProvider } from 'styled-components';
import { store } from './app/store'
import { Provider } from 'react-redux'
import App from '../src/routes/App'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
    <Provider store={store}>
      <BrowserRouter>
    <App />
      </BrowserRouter>
  </Provider>
    </ThemeProvider>
  </React.StrictMode>
)
