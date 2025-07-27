import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from "../home/home";
import About from "../about/about";
import Portfolio from "../portfolio/portfolio";
import Contact from "../contact/contact";
import Footer from "../footer/footer";
import Navbar from "../navbar/navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
