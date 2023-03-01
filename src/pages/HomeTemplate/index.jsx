import Header from "./_component/Header/header";
import Footer from "./_component/Footer/footer";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

export default function HomeTemplate() {
  return (
    <div>
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  );
}
