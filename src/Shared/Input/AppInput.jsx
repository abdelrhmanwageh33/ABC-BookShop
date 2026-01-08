import { Label, TextInput } from 'flowbite-react'

export default function AppInput({Id,Type ,Msg ,InputName,...res}) {
  return (
   <>
    <div className="mb-2 block text-start border-0 ">
          <Label className='text-[#140C40] capitalize' htmlFor={Id}>{InputName} </Label>
        </div>
        <TextInput  id={Id} type={Type} placeholder={Msg} {...res} required />
   
   </>
  )
}
