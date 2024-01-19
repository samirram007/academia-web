import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import axiosClient from "../axios-client";

import useDocumentTitle from "../CustomHooks/useDocumentTitle";
import { toast } from 'react-toastify';
import { useMutation } from "@tanstack/react-query";
import { authLogin } from "../services/auth-api";
import { useStateContext } from "../contexts/ContextProvider";

export default function Login() {
    useDocumentTitle("LOGIN")
    const { setUser, setToken } = useStateContext();

    const usernameRef = useRef();
    const passwordRef = useRef();


//    const {mutate,data,isPending,isError,error}= useMutation({
   const loginMutation= useMutation({
        mutationFn:authLogin,
        onSuccess:(data)=>{
            console.log("data fetching: "+ data)
            setUser(data.data)
            setToken(data.token)
            toast.success("Login Successful")
        },
        onError:(error)=>{
            //console.log(error.response.data.message)
            toast.error(error.response.data.message)

        }
    })
    const onSubmit = (ev) => {
        ev.preventDefault();
        const payload = {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        };
        loginMutation.mutate(payload)
    };
    const handleToast = () => {
        console.log('12113');
        toast("Hello Toast")
    }
    return (
        <div className="login-signup-form animated fadeInDown w-full    ">
            <div className="form mt-[2rem]  bg-zinc-700/30  dark:bg-zinc-200/10 rounded-lg">
                <button onClick={handleToast}>Toast Me</button>
                <form onSubmit={onSubmit}>
                    <h1 className="title">Login into your account</h1>
                    {/* {errors && (
                        <div className="alert">
                            {Object.keys(errors).map((key) => (
                                <p key={key}>{errors[key][0]}</p>
                            ))}
                        </div>
                    )} */}
                    <input ref={usernameRef} type="text" placeholder="username" />
                    <input
                        ref={passwordRef}
                        type="password"
                        placeholder="Password"
                    />
                    <button
                        className="btn glass btn-block
                         bg-slate-600 dark:bg-slate-800/10
                     text-zinc-800 dark:text-slate-300
                     hover:bg-slate-800 hover:dark:bg-slate-600"
                    >
                        Login
                    </button>
                    <p className="message text-zinc-800 dark:text-slate-300">
                        Not Registered?{" "}
                        <Link
                            to="/signup"
                            className="text-blue-700 dark:text-blue-400
                            hover:text-blue-600 hover:dark:text-blue-300"
                        >
                            Create an account
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
