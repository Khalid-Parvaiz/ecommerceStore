import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import SignUp from './view/signup/index.jsx'
import { ToastContainer } from 'react-toastify'
import { AuthContextProvider } from './context/index.jsx'
import Dashboard from './view/dashboard/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/ecommerceStore/" element={<App />} />
      <Route path="/ecommerceStore/signUp" element={<SignUp />} />
      <Route path="/ecommerceStore/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
  <ToastContainer />
  </AuthContextProvider>
  </StrictMode>,
)
