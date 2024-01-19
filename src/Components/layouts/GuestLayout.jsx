import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";

import Background from '../Site/Background'
import Navbar from "../Site/Navbar";

export default function GuestLayout() {
    const { token } = useStateContext();
    if (token) {
        return <Navigate to="/users" />;
    }

    return (
        <div className="min-h-screen h-full w-screen bg-violet-400/50 dark:bg-slate-900/50">
            <div className="text-blue-400 hidden">For guset </div>
            <Background />
            <Navbar />

            <Outlet />
        </div>
    );
}
