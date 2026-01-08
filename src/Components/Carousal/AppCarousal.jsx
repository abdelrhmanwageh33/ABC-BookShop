
import { Button, Carousel } from "flowbite-react";
import hero1 from '../../assets/h1_hero1.jpg'
import hero2 from '../../assets/h1_hero2.jpg'
import hero3 from '../../assets/h1_hero3.jpg'
import AppButton from "../../Shared/Button/AppButton";
import { motion } from "framer-motion";


export function AppCarousal() {
  const textAnimation = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
  
  
};

const transition = {
  duration: 0.8,
  delay: 0.5,
  ease: [0, 0.71, 0.2, 1.01],
}
  return (
    <div className="h-screen md:h-[75vh] w-[85%] mx-auto my-5 bg-[#FEF4F4] ">
      <Carousel slideInterval={4000}>
        <div
          className="container flex items-center justify-center flex-col bg-cover bg-center h-full w-full"style={{ backgroundImage: `url(${hero1})` }}>
                   <motion.div
            variants={textAnimation}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
          >
                  <Button color="alternative" className="my-5 text-[10px] text-black ">Science Fiction</Button>
                    <h3 className="text-white my-5 text-[30px] md:text-[60px]">The History <br /> of Phipino </h3>

                    <AppButton Text={'Browse Store'}></AppButton>
</motion.div>
        </div>
<div
          className="container flex items-center justify-center flex-col bg-cover bg-center h-full w-full"style={{ backgroundImage: `url(${hero2})` }}>
                  <Button color="alternative" className="my-5 text-[10px] text-black">Science Fiction</Button>
                    <h3 className="text-white my-5 text-[30px] md:text-[60px]">The History <br /> of Phipino </h3>

                    <AppButton Text={'Browse Store'}></AppButton>

        </div>       
<div
          className="container flex items-center justify-center flex-col bg-cover bg-center h-full w-full"style={{ backgroundImage: `url(${hero3})` }}>

                  <Button color="alternative" className="my-5 text-[10px] text-black">Science Fiction</Button>
                    <h3 className="text-white my-5 text-[30px] md:text-[60px]">The History <br /> of Phipino </h3>

                    <AppButton Text={'Browse Store'}></AppButton>
        </div>
      </Carousel>
    </div>
  );
}
