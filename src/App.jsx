
import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from '../component/home/home';
import About from '../component/about/about';
import Portfolio from '../component/portfolio/portfolio';
import Contact from '../component/contact/contact';
import Layout from '../component/layout/layout';
import Footer from '../component/footer/footer';
import Navbar from '../component/navbar/navbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

function App() {

  return (
    <>
     <RouterProvider router={ router } />
    </>
  )
}



export default App
