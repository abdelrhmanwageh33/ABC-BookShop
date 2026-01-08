import {  Label, Select, Spinner } from "flowbite-react";
import  AppInput  from "../../Shared/Input/AppInput";
import AppButton from "../../Shared/Button/AppButton";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as z from "zod"
import ErrorComponents from "../../Shared/ErrorComponents/ErrorComponents";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Register() {
  const [ isLoading,setLoading]=useState(false)

const schema = z.object({
  name: z.string().min(3,'Must have 3 char'),
  email: z.email(),
  password:z.string().min(8),
  rePassword:z.string().min(8).refine((value)=> value ===watch('password'),{error:'Must match password'}),
dateOfBirth:z.string(),
  gender:z.literal(["male","female"]),


})
const { register,handleSubmit,watch,formState:{errors}}=useForm({    resolver: zodResolver(schema),
mode:'onChange'})
const router=useNavigate()

async function createForm(value) {
    console.log(value);
  try {
    const{data}= await axios(`${import.meta.env.VITE_BASE_URL}users/signup`,{
      method:'POST',
      data:value
      
    })
  router('/login')
    toast('LOGIN SUCCESSFULLY ✅')

  console.log(value);
  
  } catch (error) {
  console.log(error);
  
  }
}
  return (
   <div className=" w-full md:p-10 flex flex-col md:flex-row items-center justify-center bg-gray-100">
     <div className="w-full md:w-1/2 md:container md:mx-auto  py-10 my-5 text-center  shadow bg-white border-0 ">
      <div className="intro">
<h2> Sign Up</h2>
<p>Create your account to get full access</p>

      </div>

<form onSubmit={handleSubmit(createForm)} className="container mx-auto   my-5 text-center w-full md:w-[50%]" >

  <div className=" md:w-[50%] mx-5 md:mx-auto my-4">
       <AppInput Id ="name" Type="text" Msg="Enter Full Name" InputName="Your Name" {...register('name')}></AppInput>
       {watch('name')&&<ErrorComponents error={errors?.name?.message}></ErrorComponents>}
      </div>
    <div className=" md:w-[50%] mx-5 md:mx-auto my-4">
       <AppInput Id ="email" Type="email" Msg="Enter email" InputName="Your email" {...register('email')}></AppInput>
       {watch('email')&&<ErrorComponents error={errors?.email?.message} ></ErrorComponents>}
      </div>
     
      <div className=" md:w-[50%] mx-5 md:mx-auto my-4">
       <AppInput Id ="password" Type="password" Msg="Enter password" InputName="Your password" {...register('password')}></AppInput>
              {watch('password')&&<ErrorComponents error={errors?.password?.message} ></ErrorComponents>}

      </div>
      <div className=" md:w-[50%] mx-5 md:mx-auto my-4">
       <AppInput Id ="rePassword" Type="Password" Msg="Enter rePassword" InputName="Your rePassword" {...register('rePassword')} ></AppInput>
                    {watch('rePassword')&&<ErrorComponents error={errors?.rePassword?.message} ></ErrorComponents>}

      </div>
      <div className=" md:w-[50%] mx-5 md:mx-auto my-4">
       <AppInput Id ="dateOfBirth" Type="date" Msg="Enter dateOfBirth" InputName="Your dateOfBirth" {...register('dateOfBirth')}></AppInput>
                           {watch('dateOfBirth')&&<ErrorComponents error={errors?.dateOfBirth?.message} ></ErrorComponents>}

      </div>
     
      <div className=" md:w-[50%] mx-5 md:mx-auto my-4">

        <div className="mb-2 block text-start">
        <Label htmlFor="gender">Select your gender</Label>
      </div>
      <Select id="gender" required {...register('gender')}>
        <option>male</option>
        <option>female</option>
       
        </Select>
        {watch('gender')&&<ErrorComponents error={errors?.gender?.message} ></ErrorComponents>}

      </div>
<div className="flex flex-col md:flex-row items-center justify-between mx-auto w-full md:w-[50%] mb-4">
      <p className="mb-3">Already have an account? <Link className="text-[#FF1616] cursor-pointer"  to={'/login'} >Login</Link>  here</p>
      
<button className='bg-[#FF1616] p-4 text-center w-[200px] text-white rounded-lg capitalize mt-5 ' >log in {isLoading?<Spinner color="success" aria-label="Success spinner example" />
:''} </button>
</div>
</form>

    </div>
   </div>
  )
}
