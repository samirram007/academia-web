import { createBrowserRouter } from "react-router-dom";
import Login from "../views/backend/auth/Login";



const router = createBrowserRouter([
   {
    path:'/',
    element: <Login/>
   }
]);




export default router;