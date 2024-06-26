import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../Navbar/Navbar'

function Signup() {

    const navigate = useNavigate()

    const [form, setForm] = useState({})
    const [role, setRole] = useState("User")

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault();
        // setForm({...form,username:form?.username?.toLowerCase()})

        axios.post(`${import.meta.env.VITE_API_KEY}/api/auth/signup`, { ...form, role: role })
            .then((res) => {
                document.getElementById("error").innerText = res.data.message;
                setTimeout(() => navigate("/"), 1000)
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

    // console.log(role)


    return (
        <>
            <div className="h-screen overflow-y-auto">

            <div className='min-h-screen flex flex-col items-center gap-6 w-[90%] sm:w-[50%] md:w-[40%] xl:w-[30%] mx-auto py-12 pt-[8rem] sm:pt-[4rem]'>
                {/* <div className="flex items-center justify-between rounded-xl overflow-hidden px-3 py-2 bg-[#313131]">
                    <p onClick={setUserType} className="role active w-[50%] rounded-xl text-center py-1.5 font-medium cursor-pointer">User</p>
                    <p onClick={setUserType} className="role w-[50%] rounded-xl text-center py-1.5 font-medium cursor-pointer">Organisation</p>
                </div> */}
                <input type="text" name="name" onChange={handleChange} placeholder="Enter Name (for certification)" className='w-full border-2 rounded-xl outline-[#1B88F4] p-3' />
                <input type="text" name="username" onChange={handleChange} placeholder="Enter Username" className='w-full border-2 rounded-xl outline-[#1B88F4] p-3' />
                <input type="email" name="email" onChange={handleChange} placeholder="Enter Email" className='w-full border-2 rounded-xl outline-[#1B88F4] p-3' />
                <input type="number" name="contact" onChange={handleChange} placeholder="Enter Contact Number (Whatsapp)" className='w-full border-2 rounded-xl outline-[#1B88F4] p-3' />
                <input type="text" name="college" onChange={handleChange} placeholder="Enter College" className='w-full border-2 rounded-xl outline-[#1B88F4] p-3' />
                <input type="text" name="password" onChange={handleChange} placeholder="Create Password" className='w-full border-2 rounded-xl outline-[#1B88F4] p-3' />
                <input type="date" name="birthDate" onChange={handleChange} placeholder="Enter Birth Date" className='w-full border-2 rounded-xl outline-[#1B88F4] p-3' />


                <p className="text-red-500 font-medium h-6" id="error">Enter Birth Date</p>

                <button className="btn text-sm" onClick={submit}>Sign Up</button>

                <div className="w-full text-center font-medium">
                    <p>Don't have an account? <span onClick={() => navigate("/login")} className='text-red-500 hover:underline cursor-pointer'>Sign In</span></p>
                </div>
            </div>
            </div>
        </>
    )
}

export default Signup
