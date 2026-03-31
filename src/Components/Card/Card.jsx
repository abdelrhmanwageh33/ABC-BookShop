import { Rating, RatingStar } from "flowbite-react";
import { Link } from "react-router";

export default function Card({ book }) {
  return (
    <Link to={`/Book-Details/${book.id}`} className="block">
      <div className="bg-white rounded-xl p-4 sm:py-10 md:py-5 flex flex-col h-full transition-all duration-300 hover:border hover:border-red-600">
        <img
          src={book.formats["image/jpeg"]}
          className="w-full h-60 md:h-64 object-cover rounded"
          alt={book.title}
        />

        <h3 className="text-black text-xs md:text-lg font-semibold mt-3 line-clamp-1">
          {book.title}
        </h3>

        <h3 className="text-sm text-gray-500 h-[20px] md:h-[50px] line-clamp-2 transition-all duration-75 hover:text-red-600">
          {book.authors?.map((a) => a.name).join(", ")}
        </h3>

        <Rating className="mb-2">
          <RatingStar className="text-red-600" />
          <RatingStar className="text-red-600" />
          <RatingStar className="text-red-600" />
          <RatingStar className="text-red-600" />
          <RatingStar filled={false} />
        </Rating>

        <h5 className="text-red-600 text-xs mt-auto">
          Downloadcount: {book.download_count}
        </h5>
      </div>
    </Link>
  );
}