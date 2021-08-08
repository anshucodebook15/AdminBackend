import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

export default function Adminlayout({ children }) {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="content-wrapper">{children}</div>
      <Footer />
    </>
  );
}
