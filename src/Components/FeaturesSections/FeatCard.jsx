import {  Button, Rating, RatingStar } from "flowbite-react";
import { Link } from "react-router";

export default function FeatCard({book}) {
  return (
   <>
   
    <div className='flex flex-col items-center justify-center md:flex-row md:items-start   w-[90%] mx-auto py-10  '>
   <div className='sm:w-full md:w-[40%] mx-5'>
   <img src={book?.formats["image/jpeg"]} className="md:min-h-[400px] "  alt="" />
   </div>
   <div className='w-[60%] py-10 '>
     <h3 className="text-white text-2xl font-semibold mt-3  line-clamp-3  ">
       {book?.title}
     </h3>
     
     
     <h3 className="text-lg text-white h-[50px] line-clamp-1 md:line-clamp-2">
       {book?.authors?.map(a => a.name).join(", ")}
     </h3>

     <h4 className="text-2xl font-bold text-white h-[50px]" >50$</h4>
       <Rating className="mb-4">
       <RatingStar  />
       <RatingStar  />
       <RatingStar  />
       <RatingStar  />
       <RatingStar filled={false} />
     </Rating>
   <Link to={`Book-Details/${book.id}`}>
    <Button color="alternative" pill>
           Read More
         </Button>
   </Link>
  
   
     
     </div>
           </div>
   </>
  )
}
