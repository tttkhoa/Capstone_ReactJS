import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

export default function CheckoutTemplate() {
  if(!localStorage.getItem("UserAdmin")) return <Navigate replace to="/login"/>

  return (
    <div>
        <Outlet/>
    </div>
  )
}
