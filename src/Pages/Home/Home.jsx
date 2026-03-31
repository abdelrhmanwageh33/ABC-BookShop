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
var settings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6, // للشاشات الكبيرة
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 480, // الشاشات الصغيرة جدا (موبايل)
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600, // الشاشات الصغيرة (موبايل أكبر)
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1024, // تابلت
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1280, // لابتوب
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    }
  ]
};

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
   <div className="my-10 py-10 bg-[#FEF4F4]" data-aos="fade-right">
  <div className="w-[80%] mx-auto">
    <h3 className="text-center text-xl my-5">Best Selling Books Ever</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {bookMount?.slice(0, 4).map((item, i) => (
        <div key={i} className="px-2">
          <Card book={item} />
        </div>
      ))}
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
