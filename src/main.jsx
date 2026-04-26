import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import SignUp from './view/signup/index.jsx'
import { ToastContainer } from 'react-toastify'
import { DataContextProvider } from './context/index.jsx'
import Dashboard from './view/dashboard/index.jsx'
import PatientSignUp from './view/signup/patient/index.jsx'
import DoctorSignUp from './view/signup/doctor/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/ecommerceStore/" element={<App />} />
      <Route path="/ecommerceStore/signUp" element={<SignUp />} />
      <Route path="/ecommerceStore/signUp/patient" element={<PatientSignUp />} />
      <Route path="/ecommerceStore/signUp/doctor" element={<DoctorSignUp />} />
      <Route path="/ecommerceStore/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
  <ToastContainer />
  </DataContextProvider>
  </StrictMode>,
)
