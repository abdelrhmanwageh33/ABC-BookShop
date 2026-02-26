import { Outlet } from 'react-router'
import { Toaster } from 'react-hot-toast'
import "aos/dist/aos.css";
import { AppNavbar } from '../Components/AppNavbar/AppNavbar';


export default function Layout() {
  return (
 < >
 <AppNavbar/>
 <Outlet/>
 <div><Toaster/></div>
 </>
  )
}
