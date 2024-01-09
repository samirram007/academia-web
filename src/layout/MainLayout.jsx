import { useEffect } from "react";
import AuthServiceUser from "../services/AuthService";
import HomePage from "../views/frontend/pages/HomePage";
import DashboardLayout from "../views/backend/layout/DashboardLayout";





const MainLayout = () =>{

    const {isLogged, isUserLoggedIn} = AuthServiceUser();



    useEffect(()=>{
     
    },[isLogged, isUserLoggedIn]);


    return(
        <>
           {isLogged ? <DashboardLayout/> :<HomePage/> } 
        </>
    )
}



export default MainLayout;