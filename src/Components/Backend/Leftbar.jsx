import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Leftbar({ isOpen }) {
    let menuClass = isOpen ? "" : "hidden";

    return (
        <>
            {" "}
            <aside className={`h-[calc(100vh-120px)] ${menuClass}`}>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/users">Users</Link>
            </aside>
        </>
    );
}

export default Leftbar;
