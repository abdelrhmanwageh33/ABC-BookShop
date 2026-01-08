import { useContext, useEffect } from 'react';
import featImg from '../../assets/ad.jpg.webp'
import { bookcontext } from '../../Contexts/BookContext';
import { Carousel } from "flowbite-react";
import FeatCard from './FeatCard';

export default function FeatureSection({}) {
    const {bookMount}= useContext(bookcontext)
    
  return (
    <section className='w-[90%] mx-auto'>
   <div className=" md:flex flex-col md:flex-row items-start justify-center mx-auto ">
    <div className="feetSlider md:w-[70%] mx-5 ">
        <div className='flex items-center justify-between'>
            <h3 className='text-2xl'>Featured This Week</h3>
            <h4 className='p-4 shadow text-center bg-amber-50'>View All</h4>
        </div>
        <div className='bg-red-600 my-10 md:py-10'>
      <div className="">
      <Carousel indicators={false}>
       {bookMount?.map((item,i)=><FeatCard book={item} key={i}/>)}
      </Carousel>
    </div>



        </div>
    </div>
     <div className="md:w-[30%]">
    <img className='w-full ' src={featImg} alt="" />
     </div>

   </div>


    </section>
  )
}
