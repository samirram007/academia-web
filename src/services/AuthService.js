import axios from "axios";



const AuthService = () =>{
    const http = axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        headers:{
            "Content-Type":"application/json"
        }
    });

    return{
        http
    }
}


export default AuthService;