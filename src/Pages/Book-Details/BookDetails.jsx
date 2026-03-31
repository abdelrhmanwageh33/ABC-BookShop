import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Rating, RatingStar } from "flowbite-react";
import { AppFooter } from "../../Components/AppFooter/AppFooter";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export default function BookDetails() {
  const [bookDetails, setbookDetails] = useState(null);
  const { id } = useParams();

  // 🎬 Animations
  useGSAP(() => {
    if (!bookDetails) return;

    const tl = gsap.timeline();

    tl.from(".box", {
      x: -100,
      duration: 1,
      opacity: 0,
    })
      .from(".box-content", {
        y: 100,
        duration: 1,
        opacity: 0,
      });

    const split = SplitText.create(".split", {
      type: "words",
    });

    tl.from(split.words, {
      opacity: 0,
      y: 50,
      stagger: {
        each: 0.02,
        from: "random",
      },
      duration: 1,
    });
  }, [bookDetails]);

  // 📡 Fetch Data
  async function getBookDetails() {
    try {
      const { data } = await axios(
        `https://gutendex.com/books/${id}`
      );
      setbookDetails(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBookDetails();
  }, []);

  return (
    <>
      <section className="w-[95%] md:w-[90%] mx-auto">
        <h3 className="text-xl md:text-2xl my-6">Book Details</h3>

        <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl shadow-lg my-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-4 md:p-10 box">
            
            {/* 🖼️ Image */}
            <div className="w-full md:w-[50%] box-img">
              <img
                src={bookDetails?.formats["image/jpeg"]}
                className=" md:w-[50%] md:ms-auto h-[300px] md:h-[400px] object-cover rounded-xl"
                alt={bookDetails?.title}
              />
            </div>

            {/* 📄 Content */}
            <div className="w-full md:w-[60%] box-content text-center md:text-left">
              <h3 className="text-white text-xl md:text-4xl font-semibold my-3">
                {bookDetails?.title}
              </h3>

              <h3 className="text-sm text-white md:h-[50px]">
                {bookDetails?.authors?.map((a) => a.name).join(", ")}
              </h3>

              <h5 className="text-white my-5 text-lg md:text-2xl">
                500 $
              </h5>

              <Rating className="mb-2 justify-center md:justify-start flex">
                <RatingStar className="text-white" />
                <RatingStar className="text-white" />
                <RatingStar className="text-white" />
                <RatingStar className="text-white" />
                <RatingStar filled={false} />
              </Rating>

              <h5 className="text-white my-5">
                ID : {bookDetails?.id}
              </h5>
            </div>
          </div>
        </div>

        {/* 📝 Description */}
        <div className="my-6">
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            Description
          </h2>
          <p className="split text-sm md:text-base text-gray-700 leading-relaxed">
            {bookDetails?.summaries}
          </p>
        </div>
      </section>

      <AppFooter />
    </>
  );
}