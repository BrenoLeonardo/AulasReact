import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Login from './components/login'
import Idade from './components/idade'
//<App />
//<Login />
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Idade />
  </React.StrictMode>
)
