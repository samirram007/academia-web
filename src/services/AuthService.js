import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";


export default function AuthServiceUser()
{

    const navigate = useNavigate();

    const [isLogged, setIsLogged] = useState(false);


   
    
   const saveUserDetail = (user,token) =>{
    localStorage.setItem('token',JSON.stringify(token));
    localStorage.setItem('user',JSON.stringify(user));
    setToken(token);
    setUser(user);
    navigate('/admin/dashboard');
   }


   const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken;
   }


   const getUser = () => {
    const userString = localStorage.getItem('user');
    const userDetail = JSON.parse(userString);
    return userDetail;
   }


   const isUserLoggedIn = () =>{
    const userLogged = localStorage.getItem('token');
    console.log(userLogged);
    const parseToken = JSON.parse(userLogged);
    console.log(parseToken);

    if(parseToken)
    {
        setIsLogged(true);
    }
    else
    {
        setIsLogged(false);
    }
   }






   

  
   

    const http = axios.create({
        baseURL:  import.meta.env.VITE_API_URL,
        headers:{
            "Content-Type": "application/json"
        }
    });


   

    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState(getUser());
   

    




   
    return{
        http,
        setDetail:saveUserDetail,
        token,
        user,
        isUserLoggedIn,
        isLogged
    }
}