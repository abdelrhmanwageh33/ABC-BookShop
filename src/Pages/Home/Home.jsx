import { useContext, useEffect } from "react";
import Card from "../../Components/Card/Card";
import { AppCarousal } from "../../Components/Carousal/AppCarousal";
import { bookcontext } from "../../Contexts/BookContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FeatureSection from "../../Components/FeaturesSections/FeatureSection";
import Puplish from "../../Components/Puplish/Puplish";
import Newsletter from '../../assets/section-bg1.jpg'
import { Button, FloatingLabel, TextInput } from "flowbite-react";
import { AppFooter } from "../../Components/AppFooter/AppFooter";
import Skeleton from "react-loading-skeleton";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
autoplaySpeed: 2000, // الزمن بين كل سلايد والتانية

  responsive: [
  {
    breakpoint: 1280, // large screens
    settings: {
      slidesToShow: 5,
      slidesToScroll: 2,
    }
  },
  {
    breakpoint: 1024, // laptop
    settings: {
      slidesToShow: 4,
      slidesToScroll: 2,
    }
  },
  {
    breakpoint: 768, // tablet
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 640, // large mobile
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 480, // small mobile
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    }
  }
]

  }
const {bookMount,getAllBook}= useContext(bookcontext)
useEffect(() => {
    getAllBook(); // استدعاء جلب البيانات عند المونت
  AOS.init({
      duration: 2000,   // مدة الانيميشن
      once: true,       // يشتغل مرة واحدة بس
      easing: "ease-in-out",
    });

  }, []);
  return (
   <>
   <AppCarousal></AppCarousal>
   <div className=" my-10 py-10 bg-[#FEF4F4]" data-aos="fade-right">
    <div className="w-[80%] mx-auto">
      <h3 className="text-center text-xl my-5">Best Selling Books Ever</h3>
    <div className="slider-container">
      <Slider {...settings}>
        
        {bookMount?bookMount.map((item,i)=><Card book={item} key={i}   /> 
):<Skeleton  count={2} baseColor="gray" className="h-96 w-96"/>}
       
      </Slider>
    </div>
    </div>

   </div>
   

   <FeatureSection></FeatureSection>
<Puplish></Puplish> 

<section className="py-14 my-14 flex flex-col items-center justify-center text-white" data-aos="fade-up-right">
<div className="w-[90%] mx-auto flex flex-col items-center justify-center h-[50vh]" style={{ backgroundImage: `url(${Newsletter})` }}>
<h3 className= "py-2 text-2xl text-center">Join Newsletter</h3>
<p className= "py-2 text-gray-400 text-[12px] text-center">Lorem started its journey with cast iron (CI) products in 1980.<br/> The initial main objective was to ensure pure water and affordable irrigation</p>
<div className="flex items-center justify-center gap-4 py-2 my-2">
        <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow  className="rounded-xl border-0 "/>
          <Button color="red" className="" pill>Subscribe </Button>

</div>
</div>
</section>
   <AppFooter></AppFooter>
   </>
  )
}
