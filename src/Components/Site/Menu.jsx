import { NavLink } from "react-router-dom";
function GuestMenu({ isOpen, setOpen }) {
    let menuClass = isOpen ? " flex" : "hidden md:flex";
    const handleToggle = () => {
        setOpen(!isOpen);
    };
    const activeLink = "underline underline-offset-[10px] pt-1   decoration-red-500  text-md dark:text-zinc-100 font-bold bg-transparent active:bg-blue focus:bg-transparent ease-out duration-500 text-shadow-md shadow-xl shadow-inner ";
    const defaultLink = "underline underline-offset-[10px] pt-1  decoration-red-500/10 dark:text-zinc-100 text-md font-bold bg-transparent active:bg-blue focus:bg-transparent ease-in duration-500  ";
    return (
        <div className={`menu ${menuClass}  flex-col md:flex-row gap-10  justify-center  items-center md:items-end  font-bold uppercase`}>

            <NavLink to="home" className={({ isActive }) => (isActive ? activeLink : defaultLink)} onClick={handleToggle}>Home</NavLink>

            <NavLink to="about" className={({ isActive }) => (isActive ? activeLink : defaultLink)} onClick={handleToggle}>About</NavLink>

            <NavLink to="contact" className={({ isActive }) => (isActive ? activeLink : defaultLink)} onClick={handleToggle}>Contact</NavLink>

            <NavLink to="/login" className={({ isActive }) => (isActive ? activeLink : defaultLink)} onClick={handleToggle}>Login</NavLink>

        </div >
    );
}

export default GuestMenu;
