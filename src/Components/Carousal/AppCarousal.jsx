import { Button, Carousel } from "flowbite-react";
import hero1 from "../../assets/h1_hero1.jpg";
import hero2 from "../../assets/h1_hero2.jpg";
import hero3 from "../../assets/h1_hero3.jpg";
import AppButton from "../../Shared/Button/AppButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

export function AppCarousal() {
  const [active, setActive] = useState(0);
  const container = useRef(null);

  useGSAP(() => {
    if (!container.current) return;

    const slides = container.current.querySelectorAll(".slide");
    const currentSlide = slides[active];

    if (!currentSlide) return;

    const tl = gsap.timeline();

    tl.from(
      currentSlide.querySelector(".intro-btn"),
      { opacity: 0, y: 50, duration: 1 }
    )
      .from(
        currentSlide.querySelector(".intro-head"),
        { opacity: 0, y: 50, duration: 1 },
        "-=0.3"
      )
      .from(
        currentSlide.querySelector(".intro-app-btn"),
        { opacity: 0, y: 50, duration: 0.6 },
        "-=0.3"
      );
  }, [active]);

  return (
    <div
      ref={container}
      className="h-screen md:h-[75vh] w-[85%] mx-auto my-5 bg-[#FEF4F4]"
    >
      <Carousel
        slideInterval={4000}
        onSlideChange={(index) => setActive(index)}
      >
        {/* Slide 1 */}
        <div
          className="slide flex items-center justify-center flex-col bg-cover bg-center h-full w-full"
          style={{ backgroundImage: `url(${hero1})` }}
        >
          <Button
            color="alternative"
            className="my-5 text-[10px] text-black intro-btn"
          >
            Science Fiction
          </Button>

          <h3 className="text-white my-5 text-[30px] md:text-[60px] intro-head">
            The History <br /> of Phipino
          </h3>

          <AppButton
            Text={"Browse Store"}
            className="intro-app-btn"
          />
        </div>

        {/* Slide 2 */}
        <div
          className="slide flex items-center justify-center flex-col bg-cover bg-center h-full w-full"
          style={{ backgroundImage: `url(${hero2})` }}
        >
          <Button
            color="alternative"
            className="my-5 text-[10px] text-black intro-btn"
          >
            Science Fiction
          </Button>

          <h3 className="text-white my-5 text-[30px] md:text-[60px] intro-head">
            The History <br /> of Phipino
          </h3>

          <AppButton
            Text={"Browse Store"}
            className="intro-app-btn"
          />
        </div>

        {/* Slide 3 */}
        <div
          className="slide flex items-center justify-center flex-col bg-cover bg-center h-full w-full"
          style={{ backgroundImage: `url(${hero3})` }}
        >
          <Button
            color="alternative"
            className="my-5 text-[10px] text-black intro-btn"
          >
            Science Fiction
          </Button>

          <h3 className="text-white my-5 text-[30px] md:text-[60px] intro-head">
            The History <br /> of Phipino
          </h3>

          <AppButton
            Text={"Browse Store"}
            className="intro-app-btn"
          />
        </div>
      </Carousel>
    </div>
  );
}