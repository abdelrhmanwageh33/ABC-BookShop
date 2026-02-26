import { Outlet } from 'react-router'
import { Toaster } from 'react-hot-toast'
import "aos/dist/aos.css";
import { NavBar } from '../Components/Navbar/Navbar';


export default function LayOut() {
  return (
 < >
 <NavBar/>
 <Outlet/>
 <div><Toaster/></div>
 </>
  )
}
