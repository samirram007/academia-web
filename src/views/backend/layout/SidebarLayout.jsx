/* eslint-disable react/jsx-key */
// import SidebarCss from '../../../styles/modules/SidebarCss.module.css';
// import SideNav from './sidebarData/SidebarNavigation.json';

import { MdDashboard } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { IoMdPerson } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveChildUrl, saveUrlName } from "../../../redux/features/slice/user/User-BreadCrumb-Slice";



const SidebarLayout = () => {


    const dispatch = useDispatch();

    // console.log(SideNav);

    const NavLinks = [
        {
            "id": 1,
            "name": "Dashboard",
            "icon": <MdDashboard />,
            "link": "dashboard"
        },
        {
            "id": 2,
            "name": "Student",
            "icon": <PiStudentBold />,
            "link": "student"
        },
        {
            "id": 3,
            "name": "Employee",
            "icon": <IoMdPerson />,
            "link": "employee"
        }
    ]

    const CategoryLink = [
        {
            "id": 1,
            "name": "Main",
            "parent_id": 1,
            "link": "dashboard"
        },
        {
            "id": 2,
            "name": "Employee Count",
            "parent_id": 1,
            "link": "dashboard"
        },
        {
            "id": 3,
            "name": "Student Index",
            "parent_id": 2,
            "link": "student"
        },
        {
            "id": 4,
            "name": "Index Crud",
            "parent_id": 2,
            "link": "studentIndex"
        },
        {
            "id": 5,
            "name": "Image",
            "parent_id": 2,
            "link": "dashboard"
        },
    ]


    const [activeIcon, setActiveIcon] = useState('');
    const [activeLinkIcon, setActiveLinkIcon] = useState('');
    const [activeLink, setActiveLink] = useState(0);

    const handleLink = (iconName, iconId) => {
        setActiveIcon(iconName);
        setActiveLink(iconId);
        dispatch(saveUrlName(iconName))
        // alert(`${iconId}`);
    }

    const handleChildLink = (linkName) =>{
        setActiveLinkIcon(linkName);
        dispatch(saveChildUrl(linkName))
    }

    return (
        <>
            <div>
                <div className='fixed top-0 bottom-0 left-0 bg-slate-700 backdrop:blur-md opacity-60'>
                    <div className='fixed z-50 flex h-full drop-shadow-2xl md:drop-shadow'>
                        <div className='flex flex-col justify-start min-h-full gap-4 px-4 py-6 overflow-hidden md:overflow-auto bg-zinc-900'>
                            <div className="mt-14">
                                {
                                    NavLinks.map((icon, index) => {
                                        return (
                                            <div onClick={() => handleLink(icon.name, icon.id)} key={index} className={`p-3.5 mt-5 cursor-pointer ${activeIcon === icon.name ? 'text-white bg-gradient-to-bl from-amber-500 to-pink-400' : 'text-neutral-400'} rounded-lg flex-col hover:text-white duration-300 items-center gap-2 flex`}>
                                                <span className="text-2xl">{icon.icon}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                        <div className={`w-52 h-full overflow-hidden md:overflow-auto py-6 bg-white border-r border-neutral-400 flex-col gap-4 inline-flex `}>
                            <div className="mt-14">
                                {
                                    CategoryLink.filter(item => item.parent_id === activeLink).map((link, index) => {
                                        return (
                                            <Link key={index} to={`/admin/${link.link}`}>
                                            <div onClick={() => handleChildLink(link.name)}  className={`p-3.5 mt-5 cursor-pointer ${activeLinkIcon === link.name ? 'text-white bg-gradient-to-bl from-amber-600 to-pink-600' : 'text-neutral-500'} rounded-lg flex-col hover:text-white duration-300 items-center gap-2 flex`}>
                                                <span>{link.name}</span>
                                            </div>
                                            </Link>

                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}




export default SidebarLayout;