import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import UseEffect from './UseEffect.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <UseEffect /> */}
  </StrictMode>,
)
