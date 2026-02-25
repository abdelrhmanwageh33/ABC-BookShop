import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import logo from '../../../assets/logo.png.webp'
import { Link } from "react-router";

export function NavBar() {




  return (



<>
<div className="w-full bg-white">
    <Navbar className=" md:w-[90%] md:mx-auto flex justify-between items-center gap-6 md:px-20">

  {/* Left Section */}
  <div className="flex items-center gap-6   md:flex-1 ">
    <NavbarBrand href="#">
      <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
    </NavbarBrand>
  </div>

  {/* Right Section
  <div className="flex items-center gap-4 ml-auto   ">
    

    {userData ? (
      <div className="flex items-center gap-3  ">
        <img className="w-10 h-10" src={profile} alt="" />
        <h3 className="text-xs md:text-xl capitalize">{userData?.name}</h3>
        <Logout onClick={logOut} size="32" color="red"/>
      </div>
    ) : (
      <AppButton Text={'Sign in'} />
    )}
  </div> */}

</Navbar>

    </div>

    <div className=" w-full mx-auto">
<Navbar  className="bg-[#FEF4F4] mx-auto  text-center ">
       <NavbarToggle />
      <NavbarCollapse className="md:mx-auto">
        <NavbarLink as={Link} to='/' >
          Home
        </NavbarLink>
        <NavbarLink as={Link} to='/about' className="transition-all duration-100 hover:text-red-600">About</NavbarLink>
        <NavbarLink as={Link} to='/categories' className="transition-all duration-100 hover:text-red-600" >Cateroges</NavbarLink>
        <NavbarLink as={Link} to='/blog' className="transition-all duration-100 hover:text-red-600">Blog</NavbarLink>
        <NavbarLink as={Link} to='/Contact' className="transition-all duration-100 hover:text-red-600">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>

    </div>

   
  
  
</>
  )
}

      