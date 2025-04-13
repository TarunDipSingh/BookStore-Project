import React from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast'

export default function Signup() {

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from.pathname || "/"

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
        };
        await axios
            .post("http://localhost:4001/user/signup", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success("Signup Successfully!");
                    navigate(from, {replace:true})
                }
                localStorage.setItem("Users", JSON.stringify(res.data.user));
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error("Error: " + err.response.data.message);
                }
            });
    };
    return (
        <>
            <div className='flex h-screen items-center justify-center p-2'>
                <div className="border-[2px] shadow-md p-5 rounded-md w-xl">
                    <div className="">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            <div className='flex justify-between'>
                                <h3 className="font-bold text-lg">Signup</h3>
                                {/* if there is a button in form, it will close the modal */}
                                <Link to="/" className="btn btn-sm  ">
                                    ✕
                                </Link>
                            </div>


                            {/* Name */}
                            <div className='mt-4 space-y-2'>
                                <span>Full-Name</span>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Enter your Full-Name"
                                    className='w-80 rounded-md py-1 px-3 outline-none'
                                    {...register("fullname", { required: true })}
                                />
                                <br />
                                {errors.fullname && <span className='text-sm text-red-500 '>This field is required</span>}
                            </div>
                            {/* Email */}
                            <div className='mt-4 space-y-2'>
                                <span>Email</span>
                                <br />
                                <input
                                    type="email"
                                    placeholder="Enter your E-mail"
                                    className='w-80 rounded-md py-1 px-3 outline-none'
                                    {...register("email", { required: true })}
                                />
                                <br />
                                {errors.email && <span className='text-sm text-red-500 '>This field is required</span>}
                            </div>
                            {/* Password */}
                            <div className='mt-4 space-y-2'>
                                <span>Password</span> <br />
                                <input type="password"
                                    placeholder="Enter your Password"
                                    className='w-80 rounded-md py-1 px-3 outline-none'
                                    {...register("password", { required: true })}
                                />
                                <br />
                                {errors.password && <span className='text-sm text-red-500 '>This field is required</span>}
                            </div>
                            {/* button */}
                            <div className='flex justify-around mt-4'>
                                <button className='cursor-pointer bg-green-500 text-white rounded-md px-3 py-1 hover:bg-green-700 duration-200'>
                                    Signup
                                </button>
                                <div className='text-xl'> <span>Have Account?</span>{" "}
                                    <button
                                        className=' cursor-pointer underline text-blue-500'
                                        onClick={() =>
                                            document.getElementById("my_modal_3").showModal()
                                        }>
                                        Login
                                    </button>{" "}

                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <Login />
        </>
    )
}
