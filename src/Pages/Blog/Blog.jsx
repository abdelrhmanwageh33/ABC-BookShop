import header from '../../assets/h2_hero2.jpg';
import post1 from '../../assets/post_1.jpg.webp';
import post2 from '../../assets/post_2.jpg.webp';
import post3 from '../../assets/post_3.jpg.webp';
import post4 from '../../assets/post_4.jpg.webp';
import { AppFooter } from '../../Components/AppFooter/AppFooter';



import BlogLeft from './BlogLeft';

export default function Blog() {
  return (
       <section className="w-[90%] mx-auto mb-10  bg-white">
      {/* Header */}
      <div
        className="container flex items-center justify-center flex-col bg-cover bg-center h-[50vh] w-full"
        style={{ backgroundImage: `url(${header})` }}
      >
        <h2 className="text-3xl text-white capitalize">blog</h2>
      </div>

      <div className='flex flex-col md:flex-row  my-10' >

    <BlogLeft></BlogLeft>

    {/* {right div} */}
<div className='my-10 py-10 w-full md:w-[50%] bg-gray-100'>

  <div className=' shadow w-full md:w-[80%] mx-auto my-15 py-5'>
    <h3 className='mx-5 text-2xl'>Category</h3>
<hr className='w-[50%]  mt-2 mx-5 text-gray-200' />
     <ul>
      <li className='mx-5 my-3 cursor-pointer text-sm hover:text-red-600 transition-all duration-75 '>Resaurant food(37)</li>
      <hr className='  mt-1 mx-5 text-gray-200' />
           <li className='mx-5 my-3 cursor-pointer text-sm hover:text-red-600 transition-all duration-75 '>Travel news(10)</li>

      <hr className='  mt-1 mx-5 text-gray-200' />
           <li className='mx-5 my-3 cursor-pointer text-sm hover:text-red-600 transition-all duration-75 '>Modern technology(03)</li>

      <hr className='  mt-1 mx-5 text-gray-200' />
           <li className='mx-5 my-3 cursor-pointer text-sm hover:text-red-600 transition-all duration-75 '>Product(11)</li>

      <hr className='  mt-1 mx-5 text-gray-200' />
           <li className='mx-5 my-3 cursor-pointer text-sm hover:text-red-600 transition-all duration-75 '>Inspiration21</li>

      <hr className='  mt-1 mx-5 text-gray-200' />
            <li className='mx-5 my-3 cursor-pointer text-sm hover:text-red-600 transition-all duration-75 '>Health Care (21)09</li>

      <hr className='  mt-1 mx-5 text-gray-200' />
     </ul>
  </div>
<div className=' shadow  w-full md:w-[80%] mx-auto my-15 py-5'>
    <h3 className='mx-5 text-2xl'>Recent Post</h3>
<hr className='w-[50%]  mt-2 mx-5 text-gray-200' />
     <div>
      <div className='flex items-center gap-5 my-5 mx-5'>
       <img src={post1} className='w-[20%]' alt="" />
       <p className='text-[#2d2d2d] cursor-pointer hover:text-red-600 transition-all duration-75'>The Amazing Hubble <br /> january 12, 2019</p>
     
      </div>
       <div className='flex items-center gap-5 my-5 mx-5'>
       <img src={post2} className='w-[20%]' alt="" />
              <p className='text-[#2d2d2d] cursor-pointer hover:text-red-600 transition-all duration-75'>The Amazing Hubble <br /> january 12, 2019</p>

     
      </div>
       <div className='flex items-center gap-5 my-5 mx-5'>
       <img src={post3} className='w-[20%]' alt="" />
              <p className='text-[#2d2d2d] cursor-pointer hover:text-red-600 transition-all duration-75'>The Amazing Hubble <br /> january 12, 2019</p>
 
     
      </div>
       <div className='flex items-center gap-5 my-5 mx-5'>
       <img src={post4} className='w-[20%]' alt="" />
              <p className='text-[#2d2d2d] cursor-pointer hover:text-red-600 transition-all duration-75'>The Amazing Hubble <br /> january 12, 2019</p>

     
      </div>
     </div>
  </div>
<div className=' shadow  w-full md:w-[80%] mx-auto my-15 py-5'>
    <h3 className='mx-5 text-2xl'>Recent Post</h3>
<hr className='w-[50%]  mt-2 mx-5 text-gray-200' />
     <ul className='grid grid-cols-4 w-[90%] mx-auto my-3'>
     <li className='p-1 text-center m-1 bg-white border rounded-xs text-[13px] cursor-pointer border-[#eeeeee] text-[#888888] capitalize transition-all duration-100 hover:bg-red-600 hover:text-white'>project</li>
     <li className='p-1 text-center m-1 bg-white border rounded-xs text-[13px] cursor-pointer border-[#eeeeee] text-[#888888] capitalize transition-all duration-100 hover:bg-red-600 hover:text-white'>love</li>
         <li className='p-1 text-center m-1 bg-white border rounded-xs text-[13px] cursor-pointer border-[#eeeeee] text-[#888888] capitalize transition-all duration-100 hover:bg-red-600 hover:text-white'>technology</li>
         <li className='p-1 text-center m-1 bg-white border rounded-xs text-[13px] cursor-pointer border-[#eeeeee] text-[#888888] capitalize transition-all duration-100 hover:bg-red-600 hover:text-white'>travel</li>
     <li className='p-1 text-center m-1 bg-white border rounded-xs text-[13px] cursor-pointer border-[#eeeeee] text-[#888888] capitalize transition-all duration-100 hover:bg-red-600 hover:text-white'>restaurant</li>
          <li className='p-1 text-center m-1 bg-white border rounded-xs text-[13px] cursor-pointer border-[#eeeeee] text-[#888888] capitalize transition-all duration-100 hover:bg-red-600 hover:text-white'>life style</li>
                    <li className='p-1 text-center m-1 bg-white border rounded-xs text-[13px] cursor-pointer border-[#eeeeee] text-[#888888] capitalize transition-all duration-100 hover:bg-red-600 hover:text-white'>design</li>
                                        <li className='p-1 text-center m-1 bg-white border rounded-xs text-[13px] cursor-pointer border-[#eeeeee] text-[#888888] capitalize transition-all duration-100 hover:bg-red-600 hover:text-white'>illustration</li>




    
     </ul>
  </div>
  <div className=' shadow  w-full md:w-[80%] mx-auto my-15 py-5'>
    <h3 className='mx-5 text-2xl'>Recent Post</h3>
<hr className='w-[50%]  mt-2 mx-5 text-gray-200' />
     <div className='grid grid-cols-4 w-[90%] mx-auto my-3'>

    <img src={post1} className='my-2' alt="" />
    <img src={post2}  className='my-2' alt="" />
    <img src={post3}  className='my-2' alt="" />
    <img src={post4}  className='my-2' alt="" />
    <img src={post2}  className='my-2' alt="" />
    <img src={post1}  className='my-2' alt="" />
    <img src={post4}  className='my-2' alt="" />
    <img src={post3}  className='my-2' alt="" />



    
     </div>
  </div>

</div>
      </div>
      <AppFooter></AppFooter>
      </section>
  )
}
