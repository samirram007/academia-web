/* eslint-disable react/prop-types */

import ThemeController from "../ThemeController";
import { Turn as Hamburger } from "hamburger-react";
import { RiLogoutCircleRLine } from "react-icons/ri";
const Navbar = ({ userName, onLogout, isOpen, setOpen }) => {
    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    return (
        <>
            {" "}
            <header
                className="sticky h-12 top-0 bg-zinc-700 dark:bg-stone-900
    border-b-2 border-red-500
 z-10"
            >
                <div className="text-sky-400">{"Header"}</div>

                <div className="flex gap-6 h-full items-center ">
                    <span className="font-bold text-sky-500"> {userName}</span>

                    <a
                        href="#"
                        onClick={onLogout}
                        className="btn btn-sm btn-outline btn-primary  btn-logout drop-shadow-lg "
                    >
                        <RiLogoutCircleRLine />
                    </a>
                    <ThemeController />
                    <div className="cursor-pointer  ">
                        <Hamburger
                            className="text-zinc-300 "
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
            </header>
        </>
    );
};

export default Navbar;
