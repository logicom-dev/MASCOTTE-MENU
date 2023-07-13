import React from 'react';
import { useAuth } from './auth';
import { Navigate, useLocation } from 'react-router-dom';

export const RequireAuth = ({children}) => {
  const auth = useAuth();
    const location = useLocation();
    const user = localStorage.getItem('user');
    console.log("user" , user)
    if(!user){
          console.log("user loc" , location.pathname)
        return <Navigate to = '/login' state={{path: location.pathname}}/>
    }

  return children
}