

import { Button, Label, Select, Spinner } from "flowbite-react";
import  AppInput  from "../../Shared/Input/AppInput";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod"
import ErrorComponents from "../../Shared/ErrorComponents/ErrorComponents";
import { useContext, useState } from "react";
import { userContext } from "../../Contexts/UserContext";
import toast from "react-hot-toast";


export default function Login() {
const schema = z.object({
  email: z.email(),
  password:z.string().min(8),

})
const { register,handleSubmit,formState:{errors},watch}=useForm({resolver:zodResolver(schema)})
const router=useNavigate()
const {getUserData} = useContext(userContext)
const [ isLoading,setLoading]=useState(false)
async function createFormLogin(value) {

  console.log(value);
  
  try {
   const{data}= await axios(`${import.meta.env.VITE_BASE_URL}users/signin`,{
      method:'POST',
      data:value
      
    })
    setLoading(true)
    localStorage.setItem("token",data?.token)
getUserData(data?.token)
  router ('/')
  toast('LOGIN SUCCESSFULLY ✅')
  console.log(value);
  
  } catch (error) {
    setLoading(true)
    toast.error(error?.response?.data.error)
  console.log(error.response?.data.error);
  
  }
}


  return (
   <div className=" w-full md:p-10 flex flex-col md:flex-row items-center justify-center bg-gray-100">
     <div className="container mx-auto  py-10 my-5 text-center  shadow bg-white border-0 ">
      <div className="intro">
<h2> Login</h2>
<p>Enter Login details to get access</p>

      </div>

<form onSubmit={handleSubmit(createFormLogin)} className="container mx-auto   my-5 text-center w-[50%]  " >

 
    <div className="md:w-[50%] mx-5 md:mx-auto my-4">
       <AppInput Id ="email" Type="email" Msg="Enter email" InputName="Your email" {...register('email')}></AppInput>
       {watch('email')&&<ErrorComponents error={errors?.email?.message}></ErrorComponents> }
      </div>
     
      <div className="md:w-[50%] mx-5 md:mx-auto my-4">
       <AppInput Id ="password" Type="password" Msg="Enter password" InputName="Your password" {...register('password')}></AppInput>
              {watch('password')&&<ErrorComponents error={errors?.password?.message}></ErrorComponents> }

      </div>
      
<div className="flex flex-col  items-center justify-between mx-auto w-full md:w-[50%] mb-4">
      <p>Don’t have an account? <Link className="text-[#FF1616] cursor-pointer"  to={'/register'} >Sign Up</Link>  here</p>
      <button className='bg-[#FF1616] p-4 text-center w-[200px] text-white rounded-lg capitalize mt-5 ' >log in {isLoading?<Spinner color="success" aria-label="Success spinner example" />
:''} </button>

</div>
</form>

    </div>


   </div>
  )
}
