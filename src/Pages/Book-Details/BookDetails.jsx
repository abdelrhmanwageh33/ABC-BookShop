import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router"
import { bookcontext } from "../../Contexts/BookContext";
import axios from "axios";
import { Button, Carousel, Rating, RatingStar } from "flowbite-react";
import FeatCard from "../../Components/FeaturesSections/FeatCard";
import AppButton from "../../Shared/Button/AppButton";
import { AppFooter } from "../../Components/AppFooter/AppFooter";

export default function BookDetails() {

  const {id}=useParams()
  console.log(id);
          const [bookDetails,setbookDetails] = useState(null)

     async function getBookDetails() {
        try {
            const {data} = await axios(`https://gutendex.com/books/${id}`,{
                method:'GET'
            })
            setbookDetails(data)
            console.log(data);
            
        } catch (error) {
            console.log(error);
            
        }
    }
     
   useEffect(() => {
    getBookDetails(); // استدعاء جلب البيانات عند المونت
  }, []);
   console.log(bookDetails);
  return (
<>


  <section className='md:w-[90%] md:mx-auto'>
    
   <div className="flex flex-col md:flex-row items-start justify-center ">
    <div className="feetSlider w-full mx-5">
        
            <h3 className='text-2xl my-10'>Book Details</h3>
       
        <div className='bg-red-600 my-10 py-10'>
      <div className=" flex flex-col md:flex-row items-start md:mx-10 p-10 gap-4">
     <div className="md:mx-10">

 <img
    src={bookDetails?.formats["image/jpeg"]}
    className="w-full h-full  object-cover rounded"
    alt=""
  />
       </div>
       <div>
          <h3 className="text-white text-4xl  font-semibold my-3   ">
    {bookDetails?.title}
  </h3>

  <h3 className="text-sm text-white h-[50px] ">
    {bookDetails?.authors?.map(a => a.name).join(", ")}
  </h3>
  <h5 className="text-white my-5 text-2xl">500 $</h5>

  <Rating className="mb-2">
    <RatingStar className="text-white" />
    <RatingStar className="text-white" />
    <RatingStar className="text-white" />
    <RatingStar className="text-white" />
    <RatingStar filled={false} />
  </Rating>


  <h5 className="text-white my-5">ID : {bookDetails?.id}</h5>
  

</div>
       </div>


    </div>
        </div>
    </div>
 <div className="my-5 mx-5 ">
  <h2>Description</h2>
  <p className="">{bookDetails?.summaries}</p>
 </div>


    </section>
<AppFooter></AppFooter>
</>


  )
}
