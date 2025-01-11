import React from "react";
import Navbar from "./Navbar";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Contect from "./Contect";
import About from "./About";
import UseCallback from "../hooks/UseCallback";
import UseMemo from '../hooks/UseMemo'

function Home() {
  const router = createBrowserRouter([
    {
      path : "/",
      element: <Navbar/>,
      children:[
        {
        index: true,
        element : <UseCallback/>
      },
        {
        path : "/contect",
        element : <Contect/>,
      },
        {
        path : "/about",
        element : <About/>,
        children:[
          {
            path: "/about/usememo",
            element : <UseMemo/>
          }
        ]
      }
    ]
    }
  ]

  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default Home;
