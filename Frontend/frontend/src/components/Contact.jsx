import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

export default function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
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
                                <span>Name</span>
                                <br />
                                <input
                                    type="text"
                                    placeholder="Enter your Full-Name"
                                    className='w-80 rounded-md py-1 px-3 outline-none'
                                    {...register("name", { required: true })}
                                />
                                <br />
                                {errors.name && <span className='text-sm text-red-500 '>This field is required</span>}
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
                                <span>Message</span> <br />
                                <textarea type="textarea"
                                    placeholder="Enter your Password"
                                    className='w-110 rounded-md py-1 px-3 outline-none'
                                    {...register("textarea", { required: true })}
                                />
                                <br />
                                {errors.textarea && <span className='text-sm text-red-500 '>This field is required</span>}
                            </div>
                            {/* button */}
                            <div className='flex justify-baseline  mt-4'>
                                <button className='cursor-pointer bg-green-500 text-white rounded-md px-3 py-1 hover:bg-green-700 duration-200'>
                                    Submit
                                </button>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
