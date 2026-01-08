import React from 'react'
import { Navigate } from 'react-router'

export default function ProtectedRouting({children}) {
    if(localStorage.getItem('token')){
 return (
    <div>{children}</div>
  )
    }else{
        return <Navigate to={'/login'}/>
    }
 
}
