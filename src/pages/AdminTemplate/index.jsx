import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function AdminTemplate() {
  if(!localStorage.getItem("UserAdmin")) return <Navigate replace to="/auth"/>

  return (
    <div>
      AdminTemplate
      <Outlet/>
    </div>
  )
}
