import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import { RouterProvider, createBrowserRouter, createHashRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Erorr from "./components/Erorr/Erorr";

export default function App() {
  const router = createHashRouter([
    {   path: "",     element: <Layout />, errorElement: <Erorr />,    children: [
        { index:true,   element: <Home />  },
        {     path: "/home", element: <Home />},
         {   path: "/about",  element: <About />  },
        {     path: "/portfolio",  element: <Portfolio /> },
        {    path: "/contact",    element: <Contact />},
        {     path: "*",   element: <Erorr /> },  ]
     },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

