import { Badge } from 'flowbite-react'
import React from 'react'
import { HiCheck, HiClock } from 'react-icons/hi'
import singlefour from '../../assets/single_blog_4.jpg.webp';

export default function BlogCard({img}) {
  return (
    <div className=' mb-5'>

<div className='shadow '>
<div className='w-full relative my-15 px-4'>
  <img src={img} alt="" />
<div className='absolute bg-red-700 p-5 rounded-lg text-white text-center text-2xl bottom-[-50px] start-6'>
  <h3>15 <br /> june</h3>
</div>
</div>
<h3 className='text-3xl my-5 px-4'>Google inks pact for new 35-storey office</h3>
<p className='text-[#301A22] my-5 px-4' >That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven <br /> in place seed it second morning saying.</p>
<div className="flex flex-wrap gap-2">
      <Badge color="gray" icon={HiCheck}>2 minutes ago</Badge>
      <Badge color="gray" icon={HiClock}>
        3 days ago
      </Badge>
    </div>
</div>
        
    </div>
  )
}
