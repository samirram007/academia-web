/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function MobileMenu({ isOpen, setOpen }) {
    let menuClass = isOpen ? "" : "hidden";
    const handleToggle = () => {
        setOpen(!isOpen);
    };

    return (
        <div className={`menu  hidden ${menuClass}`}>

            <NavLink to="/home" onClick={handleToggle} className="">
                Home
            </NavLink>

            <NavLink to="/about" onClick={handleToggle}>
                About
            </NavLink>

            <NavLink to="/contact" onClick={handleToggle}>
                Contact
            </NavLink>

            <NavLink to="/login" onClick={handleToggle}>
                Login
            </NavLink>
        </div>
    );
}

export default MobileMenu;
