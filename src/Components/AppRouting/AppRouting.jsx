import { createBrowserRouter } from "react-router";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Cart from "../../Pages/Cart/Cart"
import BookDetails from "../../Pages/Book-Details/BookDetails"
import Blog from "../../Pages/Blog/Blog"

import BookContextProvider from "../../Contexts/BookContext";
import Contact from "../../Pages/Contact/Contact";
import AllPage from "../../Pages/AllPage/AllPage";
import ProtectedRouting from "../ProtectedRouting/ProtectedRouting";
import Categories from "../../Pages/Categories/Categories";
import Layout from "../../Layout/Layout";

export const routing=createBrowserRouter([
    {path:'',element:

        <BookContextProvider>
         <Layout/>
        </BookContextProvider>
        ,children:[
        {index:'page',element:<ProtectedRouting><AllPage/></ProtectedRouting>,children:[
          {index:true,element:<Home/>},
        {path:'about',element:<About/>},
        {path:'categories',element:<Categories/>},
        {path:'cart',element:<Cart/>},  
        {path:`Book-Details/:id`,element:<BookDetails/>},
        {path:'blog',element:<Blog/>},
                {path:'Contact',element:<Contact/>},
        ]},

        


    ]}
])