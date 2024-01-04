import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../views/backend/auth/Login";
import DashboardLayout from "../views/backend/layout/DashboardLayout";
import Dashboard from "../views/backend/pages/admin/Dashboard";
import StudentIndex from "../views/backend/pages/admin/Student/Index";




const router = createBrowserRouter([


   //  This Route Path is written for the Frontend Website
   {
    path:'/',
    element: <MainLayout/>
   },

   // This is the Route to log into dashboard
   {
      path:'/login',
      element: <Login/>,
   },

   // These are the routes of Admin dashboard
   {
      path:'/admin',
      element: <DashboardLayout/>,
      children:[
         {
            path:'dashboard',
            element:<Dashboard/>
         },
         {
            path:'student',
            element: <StudentIndex/>
         }
      ]
   },
]);




export default router;