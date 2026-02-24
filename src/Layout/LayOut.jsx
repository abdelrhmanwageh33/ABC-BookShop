import { Outlet } from 'react-router'
import { NavBar } from '../Components/AppRouting/Navbar/Navbar'
import { Toaster } from 'react-hot-toast'
import "aos/dist/aos.css";


export default function Layout() {
  return (
 < >
 <NavBar></NavBar>
 <Outlet/>
 <div><Toaster/></div>
 </>
  )
}
