import axios from "axios";



const AuthService = () =>{
    const http = axios.create({
        baseURL:"https://academia.ctrlaltfix.live/api/",
        headers:{
            "Content-Type":"application/json"
        }
    });

    return{
        http
    }
}


export default AuthService;