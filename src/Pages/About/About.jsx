import header from '../../assets/h2_hero2.jpg'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AppFooter } from '../../Components/AppFooter/AppFooter';
export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 2000,   // مدة الانيميشن
      once: true,       // يشتغل مرة واحدة بس
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
    <section className="my-10 py-10 w-[90%] mx-auto">
      <div className="container flex items-center justify-center flex-col bg-cover bg-center h-[50vh] w-full" style={{ backgroundImage: `url(${header})` }}>

    <h2 className='text-3xl text-white'>About</h2>
      </div>
      <div className='py-10 my-10'  data-aos="fade-right">
<h3 className='text-3xl font-bold'>Our Story</h3>
<p className='my-5 text-[#707070]'>

 Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and
</p>

      </div>
      <div className='py-10 my-5' data-aos="fade-up-right">
<h3 className='text-3xl font-bold capitalize'>Our goals</h3>
<p className='my-5 text-[#707070]'>

 Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and
</p>

      </div>
    </section>
    <AppFooter></AppFooter>
    </>
  )
}
