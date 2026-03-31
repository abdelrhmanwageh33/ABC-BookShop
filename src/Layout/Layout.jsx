import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import "aos/dist/aos.css";
import { AppNavbar } from "../Components/AppNavbar/AppNavbar";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { SidebarTop } from "iconsax-reactjs";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Layout() {
  const smootherRef = useRef(null); 
  useGSAP(() => {
   
 smootherRef.current=   ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 3,
      effects: true
    });

  });

function scrollTop(){
  smootherRef?.current.scrollTop(0)
}

  return (
    <>

      <div id="smooth-wrapper" className="relative z-10 ">
        <div id="smooth-content">
        
                <AppNavbar  />

          <Outlet />
        </div>
      </div>
<div className="fixed md:bottom-5 md:right-5 right-0 bottom-0 z-50">
        <SidebarTop onClick={scrollTop} size="32" color="black" />
      </div>
      <Toaster />
    </>
  );
}