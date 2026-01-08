import React from 'react'
import { Navigate } from 'react-router'

export default function AuthProtect({children}) {
if(localStorage.getItem('token')){
    return <Navigate to={'/'}></Navigate>
}else{
    return children
}
}
