import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import SignUp from './view/signup/index.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/ecommerceStore" element={<App />} />
      <Route path="/ecommerceStore/signUp" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
  <ToastContainer />
  </StrictMode>,
)
