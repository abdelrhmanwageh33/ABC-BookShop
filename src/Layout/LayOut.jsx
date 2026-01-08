import React from 'react'
import { Outlet } from 'react-router'
import { NavBar } from '../Components/AppRouting/Navbar/Navbar'
import { Toaster } from 'react-hot-toast'
import AOS from "aos";
import "aos/dist/aos.css";


export default function LayOut() {
  return (
 < >
 <NavBar></NavBar>
 <Outlet/>
 <div><Toaster/></div>
 </>
  )
}
