/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useRef, useState } from "react"
import ClipLoader from "react-spinners/ClipLoader";
import Button from "./Button"
import InputField from "./InputField"
import { Router, useRouter } from "next/navigation"
import axios from "axios"


const Signin = () => {
    const [student, setStudent] = useState(false)
    const router = useRouter()
    const matRef = useRef(null)
    const [load, setLoad] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const passwordRef = useRef(null)



    return (
        <div className=" ">
            <div className="flex flex-col space-y-[24px] md:space-y-[32px] mb-[16px]">
                <h1 className=" text-[#141414] text-[24px] md:text-[30px] text-center md:leading-[38px] medium mt-[5px] ">Sign in to AttendX</h1>
                <div className="mx-auto flex flex-row bg-[#E4E4E4] rounded-full p-[8px] cursor-pointer">
                    <div className={`text-[14px] font-[500] rounded-full leading-[24px] px-[40px] py-[8px] medium  ${student ? "text-[#9E9E9E] " : "text-[#141414] bg-white"}`} onClick={() => {
                        setStudent(false)
                    }}>Lecturer</div>
                    <div className={`text-[14px] font-[500] rounded-full leading-[24px] px-[40px] medium py-[8px] ${!student ? "text-[#9E9E9E]" : "text-[#141414] bg-white"}`} onClick={() => {
                        setStudent(true)
                    }}>Student</div>
                </div>
            </div>

            <div className="flex space-y-[16px] flex-col">
                <div className="space-y-[8px]  ">
                    <InputField label={student ? "Matric No" : "Staff ID"} type="text" ref={matRef} />
                </div>

                <div className="">
                    <InputField label={"Password"} type="text" ref={passwordRef} />
                </div>
            </div>

            <h1 className=' mt-[8px] text-[#183DA7] medium '>Forgot Password ?</h1>


            <div className="mt-[48px]">
                <div
                    className=""
                    onClick={
                        load ? () => { } :
                            async () => {
                                setLoad(true)
                                const data = {
                                    identity_number: matRef?.current.value,
                                    password: passwordRef?.current.value,
                                }
                                console.log(data)

                                try {
                                    const res = await axios.post("https://attendx-2hi6.onrender.com/auth/login", data);
                                    console.log(res);

                                    if (res.data) {
                                        window.localStorage.setItem("user", JSON.stringify(res.data));
                                        if (res.data.role === "teacher") {
                                            router.push("/admin/Student");
                                        } else if (res.data.role === "student") {
                                            router.push("/students");
                                        }
                                    } else {
                                        // Handle the case where the response data is missing or invalid
                                        setErrorMessage("Invalid response from the server");
                                    }

                                    
                                    setLoad(false);
                                } catch (error) {
                                    // Handle any network or request-related errors
                                    setLoad(false);
                                    setErrorMessage("An error occured please ensure that your username and password is correct");
                                    console.log(error);
                                }
                            }
                    }>

                    <Button text={load ? <ClipLoader color="white" size={18} /> : "Sign in"} />
                    {errorMessage && (<p className=" text-red-500 text-center text-[14px] ">{errorMessage}</p>)}
                </div>
            </div>
            <div className="md:hidden text-center mt-[16px] medium">
                <h2>New to AttendX? <a href="/SignUp" className="text-[#183DA7]">Sign up </a></h2>
            </div>
        </div>
    )
}

export default Signin