
import { Facebook, Instagram, Twitch, Youtube } from 'iconsax-reactjs';
import logo from '../../assets/logo.png.webp'
import { Link } from 'react-router';



export function AppFooter() {
  return (
    <div  className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-10">
    <div className='my-2'>
      <img src={logo} className='mb-5' alt="" />
      <p>Get the breathing space now, and we’ll <br /> extend your term at the other end year for <br /> go.</p>
      <div className='flex gap-4 mt-5'>
        <Facebook size="32" color="gray"/>
        <Instagram size="32" color="gray"/>
        <Youtube size="32" color="gray"/>
        <Twitch size="32" color="gray"/>
      </div>
      </div>  
    <div>
    <h3 className='text-[#232F55] mb-5'>Book Category</h3>
    <ul>
      <li className='text-[#454E6D] cursor-pointer transition-all duration-500 hover:text-black '>History</li>
      <li className='text-[#454E6D] cursor-pointer transition-all duration-500 hover:text-black ' >Horror - Thriller</li>
      <li className='text-[#454E6D] cursor-pointer transition-all duration-500 hover:text-black ' >Love Stories</li>
      <li className='text-[#454E6D] cursor-pointer transition-all duration-500 hover:text-black '>Science Fiction</li>
      <li className='text-[#454E6D] cursor-pointer transition-all duration-500 hover:text-black '>Business</li>
  
    </ul>
    </div>
     <div>
          <h3 className='text-[#232F55] mb-5'>Book Category</h3>

     <ul>
      <li className='text-[#454E6D] cursor-pointer transition-all duration-500 hover:text-black '>History</li>
      <li className='text-[#454E6D] cursor-pointer transition-all duration-500 hover:text-black ' >Digital Marketing</li>
      <li className='text-[#454E6D] cursor-pointer transition-all duration-500 hover:text-black ' >Software Development</li>
      <li className='text-[#454E6D] cursor-pointer transition-all duration-500 hover:text-black '>Science Fiction</li>
      <li className='text-[#454E6D] cursor-pointer transition-all duration-500 hover:text-black '>Ecommerce</li>
  
    </ul>
    </div>
     <div>
    <h3 className='text-[#232F55] mb-5'>Site Map</h3>
   <ul>
    <Link to={'/'}><li className='text-[#454E6D] cursor-pointer transition-all duration-500 hover:text-black ' >Home</li>
 </Link>
    <Link to={'/about'}><li className='text-[#454E6D] cursor-pointer transition-all duration-500 hover:text-black ' >About</li>
 </Link>      
 
    <Link to={'/blog'}><li className='text-[#454E6D] cursor-pointer transition-all duration-500 hover:text-black ' >Blog</li>
 </Link>     
    <Link to={'/cateroges'}><li className='text-[#454E6D] cursor-pointer transition-all duration-500 hover:text-black ' >categores</li>
 </Link>    
 
    <Link to={'/contact'}><li className='text-[#454E6D] cursor-pointer transition-all duration-500 hover:text-black ' >contact</li>
 </Link>  
    </ul>
    </div>
    </div>
  );
}
