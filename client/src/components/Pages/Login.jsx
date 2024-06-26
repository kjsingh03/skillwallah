import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Google from '../google/google'

function Login() {

    const navigate = useNavigate()

    const [form, setForm] = useState({})
    const [role, setRole] = useState("User")

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const submit = (e) => {
        e.preventDefault();

        axios.post(`${import.meta.env.VITE_API_KEY}/api/auth/login`, form)
            .then((res) => {
                document.getElementById("error").innerText = res.data.message;
                setTimeout(() => navigate("/"), 1000)
                if(res.data.message!=='Failed to login')
                    localStorage.setItem("credentials", JSON.stringify(res.data.user))
            })
            .catch((err) => document.getElementById("error").innerText = err.response.data.message)
            .finally(() => setTimeout(() => document.getElementById("error").innerText = " ", 1000))
    }

    // const setUserType = (e) => {
    //     const activeRole = document.querySelector(".role.active")
    //     activeRole.classList.remove("active")
    //     e.target.classList.add("active")
    //     setRole(e.target.innerText)
    // }


    return (
        <>
            <div className="h-screen overflow-y-auto">

                <div className='min-h-screen flex flex-col items-center gap-6 w-[90%] sm:w-[50%] md:w-[40%] xl:w-[30%] mx-auto py-12 pt-[8rem]'>
                    {/* <div className="flex items-center justify-between rounded-xl overflow-hidden px-3 py-2 bg-[#313131]">
                    <p onClick={setUserType} className="role active w-[50%] rounded-xl text-center py-1.5 font-medium cursor-pointer">User</p>
                    <p onClick={setUserType} className="role w-[50%] rounded-xl text-center py-1.5 font-medium cursor-pointer">Organisation</p>
                </div> */}
                    <input type="text" name="username" onChange={handleChange} placeholder="Enter Username" className='w-full border-2 rounded-xl  outline-[#1B88F4] p-3' />
                    <input type="text" name="password" onChange={handleChange} placeholder="Enter Password" className='w-full border-2 rounded-xl  outline-[#1B88F4] p-3' />
                    <Link to="/forget" className="cursor-pointer active:underline text-[#1B88F4] font-medium h-6 w-full text-right">Forget your password?</Link>
                    <p className="text-red-500  font-medium h-6" id="error"></p>
                    <button className="btn text-sm w-max" onClick={submit}>Log In</button>
                    <div className="w-full text-center font-medium">
                        <p>Don't have an account? <span onClick={() => navigate("/signup")} className='text-red-500 hover:underline cursor-pointer'>Sign Up</span></p>
                    </div>
                    <GoogleOAuthProvider clientId="998073669915-anlutjml8l1v5kmhkrvnh5klk3sa9qmk.apps.googleusercontent.com">
                        <Google />
                    </GoogleOAuthProvider>
                </div>
            </div>
        </>
    )
}

export default Login
