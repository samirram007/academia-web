// import { Outlet } from 'react-router';
// import DashCss from '../../../styles/modules/DashboardCss.module.css';
// import Dashboard from "../pages/admin/Dashboard";
import { Outlet } from "react-router";
import NavbarLayout from "./NavbarLayout";
import SidebarLayout from "./SidebarLayout";



const DashboardLayout = () => {
    return (
        <>
            <div className="bg-slate-50">
                <div>
                    <NavbarLayout />
                </div>
                <div className="main max-w-[2300px] mt-[76px] flex flex-1 justify-between">
                    <SidebarLayout />
                    {/* <div className={`main overflow-auto w-full h-full z-10`}>
                   <div className="p-6 mb-6 bg-slate-50 min-h-screen">
                    <div className="flex gap-4 flex-wrap">
                        <div className="p-6 w-full my-4 lg:w-[64%] bg-white rounded-xl">
                            <div className="text-zinc-900 font-medium leading-normal mb-8"></div>
                        </div>
                    </div>
                    <Dashboard/>
                   </div>
                </div> */}
                    <div className="main md:ml-[310px] overflow-auto w-full h-full z-10">
                        <div className="py-6 px-3 bg-slate-50">
                            {/* <Dashboard /> */}
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}




export default DashboardLayout;