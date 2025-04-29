import React from 'react'
import { Outlet } from 'react-router'

export default function AuthLayout() {
  return (
    <div>
        <h1>Auth Layout</h1>
        <div className="container">
            <div className="row">
            <div className="col-md-6 offset-md-3">
                <h2>Welcome to the Auth Layout</h2>
                <p>This is a simple authentication layout.</p>
                <Outlet/>
            </div>
            </div>
        </div>
    </div>
  )
}
