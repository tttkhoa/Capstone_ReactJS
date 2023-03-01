import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import "./style.css";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";

export default function AdminTemplate() {
  if (localStorage.getItem("UserAdmin")) return <Navigate replace to="/auth" />;
  return (
    <div>
      <div>
        <Header />
        <div id="layoutSidenav">
          <Sidebar />
          <div id="layoutSidenav_content">
            <main>
              <Outlet />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
