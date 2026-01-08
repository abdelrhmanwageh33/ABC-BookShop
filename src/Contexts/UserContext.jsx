import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router";

export const userContext= createContext(null)


export default function UserContextProvider({children}) {
const router=useNavigate()
const [userData,setUserData]=useState(null)


    async function getUserData(token) {
        try {
           const {data}= await axios(`${import.meta.env.VITE_BASE_URL}users/profile-data`,{
            method:'GET',
            headers:{token:token}
           }) 
           setUserData(data?.user)
           console.log(data);
           
        } catch (error) {
            console.log(error);
            
        }
    }
    function logOut(){
        console.log('hiiiiiiiii');
        localStorage.clear()
        router('/login')
        setUserData(null)
        
      }
      const value={userData,setUserData,logOut,getUserData}
  return (
    <userContext.Provider value={value}>{children}</userContext.Provider>
  )
}
