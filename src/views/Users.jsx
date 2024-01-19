/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "../axios-client";
import useDocumentTitle from "../CustomHooks/useDocumentTitle";
import {fetchUsers} from '../services/users-api'
import {useQuery} from '@tanstack/react-query'

export default function Users() {
    useDocumentTitle ('USERS')

    const {data:users,isPending,isLoading,isError,error}=useQuery({
        queryKey: ['users'],
        queryFn:fetchUsers,

    })

    const onDelete = (u) => {
        if (!window.confirm("Are you sure you want to delete this user?")) {
            return;
        }
        axiosClient.delete(`/users/${u.id}`).then(() => {
            // TODO: show notification
           users
        });
    };

    return (
        <div className="flex justify-stretch flex-col w-full px-4 overflow-y-auto">
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <h1>Users</h1>
                <Link
                    to="/users/new"
                    className="btn btn-sm btn-primary bg-indigo-500"
                >
                    Add new{" "}
                </Link>
            </div>
            <div
                className="card  animated fadeInDown
            bg-zinc-600/20 dark:bg-zinc-200/20
            "
            >
                <table className="table table-lg text-zinc-600 dark:text-zinc-400">
                    <thead
                        className="bg-slate-600/70 dark:bg-slate-200/30
                    text-slate-200 rounded-md dark:text-slate-300 rounded-md "
                    >
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Create Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {isLoading && (
                        <tbody>
                            <tr>
                                <td colSpan="5" className="text-center">
                                    Loading...
                                </td>
                            </tr>
                        </tbody>
                    )}

                    {!isLoading && (
                        <tbody>
                            {Array.isArray(users) ? (
                                users.map((u) => (
                                    <tr key={u.id}>
                                        <td>{u.id}</td>
                                        <td>{u.name}</td>
                                        <td>{u.email}</td>
                                        <td>{u.created_at}</td>
                                        <td>
                                            <Link
                                                className="btn btn-sm btn-primary btn-outline"
                                                to={`/users/${u.id}`}
                                            >
                                                Edit
                                            </Link>
                                            &nbsp;
                                            <button
                                                onClick={(ev) => onDelete(u)}
                                                className="btn btn-sm btn-error btn-outline !text-red-400"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <p>No Users Found</p>
                            )}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
}
