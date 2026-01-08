import { Rating, RatingStar } from "flowbite-react";
import { useCallback, useContext } from "react";
import { bookcontext } from "../../Contexts/BookContext";
import { userContext } from "../../Contexts/UserContext";
import { Link } from "react-router";

export default function Card({ book }) {
 const {userData}= useContext(userContext) 



  return (
<Link to={`/Book-Details/${book.id}`}>

<div className=" bg-white rounded-xl p-4 flex flex-col min-h-[450px] mx-3  transition-all duration-1000 hover:border hover:border-red-600 " >

  <img
    src={book.formats["image/jpeg"]}
    className="w-full h-[300px] md:h-[260px] object-cover rounded"
    alt=""
  />

  <h3 className="text-black text-xs md:text-lg font-semibold mt-3  line-clamp-1 ">
    {book.title}
  </h3>

  <h3 className="text-sm text-gray-500 h-[30px] md:h-[50px] line-clamp-2 transition-all duration-75 hover:text-red-600">
    {book.authors?.map(a => a.name).join(", ")}
  </h3>

  <Rating className="mb-2">
    <RatingStar className="text-red-600" />
    <RatingStar className="text-red-600" />
    <RatingStar className="text-red-600" />
    <RatingStar className="text-red-600" />
    <RatingStar filled={false} />
  </Rating>

  <h5 className="text-red-600 text-xs mt-auto">Downloadcount : {book.download_count}</h5>
</div>
</Link>

  );
}
