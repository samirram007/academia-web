// import { Outlet } from 'react-router';
// import DashCss from '../../../styles/modules/DashboardCss.module.css';
// import Dashboard from "../pages/admin/Dashboard";
import { Outlet } from "react-router";
import NavbarLayout from "./NavbarLayout";
import SidebarLayout from "./SidebarLayout";



const DashboardLayout = () => {
    return (
        <>
            <div className="z-10 bg-slate-50">
                <div>
                    <NavbarLayout />
                </div>
                <div className="main max-w-[2300px] mt-[76px] flex flex-1 justify-between">
                    <SidebarLayout />
                    <div className="main md:ml-[310px] overflow-auto w-full h-full relative z-20">
                        <div className="px-3 py-6 bg-slate-50">
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}




export default DashboardLayout;