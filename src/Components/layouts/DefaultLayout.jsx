import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";

import Background from '../Site/Background'
import {  useState } from "react";

import {fetchUser} from "../../services/users-api";
import Leftbar from "../Backend/Leftbar";
import Navbar from "../Backend/Navbar";
import { useQuery ,useMutation} from "@tanstack/react-query";
import { authLogout } from "../../services/auth-api";
import { toast } from 'react-toastify';
export default function DefaultLayout() {
     const { user, token, setUser, setToken } = useStateContext();
    const [isOpen, setOpen] = useState(true);

const authUser=useQuery({
    queryKey:['user'],
    queryFn:fetchUser
})
 console.log(authUser);
const  logout=useMutation({
    mutationFn: authLogout,
    onSuccess: () => {

            setUser({});
            setToken(null);
            toast.success("Logout Successful")
    },
    onError: (err) => {
        console.log(err);
    }
})
    if (!token) {
        return <Navigate to="/login" />;
    }

    const onLogout = (ev) => {
        ev.preventDefault();
        console.log("Call Logout");
        logout.mutate()

    };



    return (
        authUser.isLoading?<div>loading..</div>:
        <div
            id="defaultLayout"
            className="h-screen w-screen bg-zinc-200 dark:bg-zinc-700 overflow-y-auto"
        >
            <div className="content h-screen overflow-y-auto">
                <Navbar
                    isOpen={isOpen}
                    setOpen={setOpen}
                    userName={authUser.data.data.name}
                    onLogout={onLogout}
                />

                <main className="flex p-0 ">
                    <Leftbar isOpen={isOpen} />
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
