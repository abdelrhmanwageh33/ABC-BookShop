import { Label, Textarea, TextInput } from 'flowbite-react';
import header from '../../assets/h2_hero2.jpg';
import { AppFooter } from '../../Components/AppFooter/AppFooter';

export default function Contact() {
  return (
    <section className="w-[90%] mx-auto my-10 py-10 " data-aos="fade-up-right">
      {/* Header */}
      <div
        className="container flex items-center justify-center flex-col bg-cover bg-center h-[50vh] w-full"
        style={{ backgroundImage: `url(${header})` }}
      >
        <h2 className="text-3xl text-white capitalize">contact</h2>
      </div>
<div className='flex flex-col md:flex-row items-start'>
 <form className='w-full md:w-[70%]'>

      <h3 className='p-4 my-4 text-2xl capitalize'>Get in touch</h3>
    <div className="w-full">
      
      <textarea id="comment"  rows={5} placeholder="Enter message..." className='text-black rounded-xs w-full  border-gray-200  focus:outline-none
    focus:ring-0 mb-4 placeholder:text-gray-400  text-xs'/>
    </div>
    <div className="w-full flex flex-col md:flex-row  gap-4">
      <div className='w-full md:w-1/2'>
       
      <input
  id="text"
  type="email"
  placeholder="Enter your name"
  
  className="
    text-black placeholder:text-gray-400 text-xs p-4 w-full boder border-gray-200
    focus:outline-none focus:ring-0 mb-4 "
  
/>
      </div>
       <div className='w-full md:w-1/2'>
       <input
  id="text"
  type="email"
  placeholder="Enter your email"
  
  className="
    text-black placeholder:text-gray-400 text-xs p-4 w-full boder border-gray-200
    focus:outline-none focus:ring-0 mb-4 "
  
/>
      </div>
    </div>
     <div className='w-full'>
       
<input
  id="text"
  type="email"
  placeholder="Enter subject"
  
  className="
    text-black placeholder:text-gray-400 text-xs p-4 w-full boder border-gray-200
    focus:outline-none focus:ring-0 mb-4 "
  
/>
      </div>

      <button className='border border-red-600 bg-transparent p-4 rounded-xs text-red-600 my-5' >Send messge</button>






      </form>
      <div className='w-[30%]'></div>
</div>
     
<AppFooter></AppFooter>

      </section>

  )
}
