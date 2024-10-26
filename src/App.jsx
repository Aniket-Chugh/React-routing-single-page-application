import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from "./Navbar"
import React from "react"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import NavigateCode from "./NavigateCode"
import User from "./User"


function App() {

const route = createBrowserRouter([
    {
        path: "/",
        element: <><Navbar/> <p>Single page Application</p></>
    },

    {
        path: "/home",
        element: <><Navbar/><Home/></>
    },

    {
        path: "/about",
        element: <><Navbar/><About/></>
    },

    {
        path: "/contact",
        element: <><Navbar/><Contact/><NavigateCode/></>
    },

    {
        path: "/user/:username",
        element: <><Navbar/><User></User></>
    }
])


  return (

   <RouterProvider router={route}></RouterProvider>
  )
}

export default App
