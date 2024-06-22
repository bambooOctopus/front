import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './components/Provider.jsx'

import './index.css'

let siteData = {
  user: undefined,
  sessionKey: undefined
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter >
    <Provider siteData={siteData}>
      <App />
    </ Provider >
    </BrowserRouter >

  </React.StrictMode>,
)
