import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

export const bookcontext= createContext(null)

export default function BookContextProvider({children }) {

    const [bookMount,setBookMount] = useState(null)

const [page,setPage]=useState(1)


    async function getAllBook() {
        try {
            const {data} = await axios(`https://gutendex.com/books/?page=${page}`,{
                method:'GET'
            })
            setBookMount(data?.results)
            console.log(data?.results);
            
        } catch (error) {
            console.log(error);
            
        }
    }

     


    const value={bookMount,setBookMount,getAllBook,page,setPage}
  return (
    <bookcontext.Provider value={value}>{children}</bookcontext.Provider>
  )
}
