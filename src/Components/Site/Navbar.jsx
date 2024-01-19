import { useState, useEffect, lazy, Suspense } from "react";

import ThemeController from "../ThemeController";

import { Turn as Hamburger } from "hamburger-react";
import Logo from "./Logo";
import LangSelector from "../LangSelector";

import { useTranslation } from 'react-i18next';


const Menu = lazy(() => import("./Menu"));

function GuestNavbar() {
    const [isOpen, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const toggleMenu = () => {
        setOpen(!isOpen);
    };
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 100; // Change 100 to the scroll threshold where you want to trigger the color change
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const { t } = useTranslation()



    return (
        <>
            <header
                className={scrolled ? 'bg-blue-700/90 text-white   py-4 px-6 sticky w-screen top-0 z-10' : 'bg-transparent w-screen py-4 px-6 sticky top-0 z-10'}
            >
                <nav
                    className="flex flex-row flex-wrap justify-between items-end px-0 pt-2 md:px-5 lg:px-36 md:pt-10 "
                >
                    <div className=" basis-1/2 md:basis-2/6 lg:basis-1/6  order-1">
                        <h3 className="flex flex-row align-center gap-2  text-4xl font-medium text-zinc-100 tracking-tight ">
                            <span className="flex items-end pb-1 -mr-2">SCH </span><Logo /><span className="flex items-end pb-1 -ml-2">L </span>
                            {/* <span className="flex items-end pb-1">
                                {import.meta.env.VITE_APP_NAME}
                            </span> */}



                        </h3>

                    </div>
                    <div className=" basis-full md:basis-3/6 lg:basis-3/6  order-3 md:order-2 ">

                        <Menu isOpen={isOpen} setOpen={setOpen} />

                    </div>
                    <div className="basis-1/2 md:basis-1/6 lg:basis-1/6  flex flex-row justify-end order-2 md:order-3">
                        <div >
                            <ThemeController />
                        </div>
                        <LangSelector />
                        <div className="cursor-pointer md:hidden text-slate-800 dark:text-zinc-50">
                            <Hamburger
                                className=" "
                                easing="ease-in"
                                hideOutline={true}
                                toggled={isOpen}
                                toggle={setOpen}
                                onToggle={() => {
                                    toggleMenu();
                                }}
                            />
                        </div>

                    </div>

                </nav>

            </header >
        </>
    );
}

export default GuestNavbar;
