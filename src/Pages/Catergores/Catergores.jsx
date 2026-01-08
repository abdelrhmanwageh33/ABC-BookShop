import { useContext, useEffect, useState } from 'react';
import header from '../../assets/h2_hero1.jpg';
import { bookcontext } from '../../Contexts/BookContext';
import Card from '../../Components/Card/Card';
import { AppFooter } from '../../Components/AppFooter/AppFooter';

export default function Catergores() {
  const { bookMount, getAllBook } = useContext(bookcontext);

  // State
  const [filter, setFilter] = useState([]);
  const [category, setCategory] = useState(null);

  // Handle category selection
  function handleCategory(x) {
    setCategory(x); // تحديث category
  }
function changeCategory(){
     if (!category) {
      setFilter(bookMount); 
    } else {
      const filtered = bookMount?.filter((item) =>
        item.bookshelves?.includes(category)
      );
      setFilter(filtered);
    }
}
  // Effect: جلب البيانات عند المونت
  useEffect(() => {
    getAllBook();
  }, []);

  // Effect: فلترة الكتب عند تغيير bookMount أو category
  useEffect(() => {
 changeCategory()
  }, [bookMount, category]);

  return (
    <section className="w-[90%] mx-auto my-10 py-10">
      {/* Header */}
      <div
        className="container flex items-center justify-center flex-col bg-cover bg-center h-[50vh] w-full"
        style={{ backgroundImage: `url(${header})` }}
      >
        <h2 className="text-3xl text-white capitalize">Book Categories</h2>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 mt-8">
        {/* Sidebar: Categories */}
       <div className='w-full md:w-[20%]  my-5'>
 <div className=" shadow p-5">
          <h3>Filter by Genres</h3>
          <ul className="my-5">
            <li
              className="my-5 cursor-pointer hover:text-red-800 transition-all duration-100"
              onClick={() => handleCategory(null)}
            >
              All
            </li>
            <li
              className="my-5 cursor-pointer hover:text-red-800 transition-all duration-100"
              onClick={() => handleCategory('Category: Novels')}
            >
              Novels
            </li>
            <li
              className="my-5 cursor-pointer hover:text-red-800 transition-all duration-100"
              onClick={() => handleCategory('Category: Romance')}
            >
              Romance
            </li>
            <li
              className="my-5 cursor-pointer hover:text-red-800 transition-all duration-100"
              onClick={() => handleCategory('Category: Poetry')}
            >
              Poetry
            </li>
              <li
              className="my-5 cursor-pointer hover:text-red-800 transition-all duration-100"
              onClick={() => handleCategory("Category: British Literature")}
            >
               British Literature
            </li>
              <li
              className="my-5 cursor-pointer hover:text-red-800 transition-all duration-100"
              onClick={() => handleCategory("Category: Classics of Literature")}
            >
              Classics of Literature
            </li>
          </ul>
        </div>
        


       </div>
        {/* Books Grid */}
        <div className="" data-aos="fade-up-right">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filter?.map((item, i) => (
              <Card book={item} key={i} />
            ))}
          </div>
        </div>
      </div>
      <AppFooter/>
    </section>

    
  );
}
