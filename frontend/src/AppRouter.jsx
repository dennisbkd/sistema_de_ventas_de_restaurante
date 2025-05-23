import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import AuthLayout from './auth/layout/AuthLayout'
import LoginPage from './auth/pages/LoginPage'
import RegisterPage from './auth/pages/RegisterPage'

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/auth' element={<AuthLayout/>} >
                <Route index element={<LoginPage />}></Route>
                <Route path='/auth/register' element={<RegisterPage />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
