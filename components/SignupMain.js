/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useRef, useState } from "react"
import ClipLoader from "react-spinners/ClipLoader";
import Button from "./Button"
import InputField from "./InputField"
import { Router, useRouter } from "next/navigation"
import axios from "axios"
import { toast } from "react-toastify";



const SignUpMain = () => {
    const [student, setStudent] = useState(false)
    const [role, setRole] = useState("")
    const [load, setLoad] = useState(false)
    const nameRef = useRef(null)
    const matRef = useRef(null)
    const passwordRef = useRef(null)
    const roleRef = useRef(null)
    const router = useRouter()

    useEffect(() => {
        console.log("hey student ")

    }, [student])

    useEffect(() => {        
        setRole("Teacher")
    }, [])

    return (
        <div className="space-y-[48px]">

            <div className="space-y-[16px] md:space-y-[24px]">

                <div className="flex flex-col  md:space-y-[32px] mb-[16px]">
                    <h1 className="hidden md:block text-[#141414] md:text-[30px] medium text-center md:leading-[38px]  ">Sign up to AttendX</h1>

                    <h1 className="block md:hidden medium mt-[5px] text-[#141414] text-[24px] text-center leading-[32px]  ">Create an account</h1>
                    <div className="mx-auto flex flex-row bg-[#E4E4E4] rounded-full p-[8px] cursor-pointer mt-[40px]">
                        <div className={`text-[14px] medium font-[500] rounded-full leading-[24px] px-[40px] py-[8px]  ${student ? "text-[#9E9E9E] " : "text-[#141414] bg-white"}`} onClick={() => {
                            setStudent(false)
                            setRole("Teacher")
                        }}>Lecturer</div>
                        <div className={`text-[14px] medium font-[500] rounded-full leading-[24px] px-[40px] py-[8px] ${!student ? "text-[#9E9E9E]" : "text-[#141414] bg-white"}`} onClick={() => {
                            setStudent(true)
                            setRole("Student")
                        }}>Student</div>
                    </div>
                </div>


                <div className="w-full">
                    <InputField label={"Full Name"} type="text" ref={nameRef} />
                </div>

                <div className="w-full">
                    <InputField label={student ? "Matric No" : "Staff ID"} type="text" ref={matRef} />
                </div>

                <div className="w-full">
                    <InputField label={"Password"} type="text" ref={passwordRef} />
                </div>
            </div>
        

            <div className="">
                <div
                    onClick={
                        load ? () => { } :
                            () => {
                                setLoad(true)
                                const data = {
                                    full_name: nameRef?.current.value,
                                    identity_number: matRef?.current.value,
                                    password: passwordRef?.current.value,
                                    role: role,
                                }
                                console.log(data)
                                try {
                                    const res = axios.post("https://attendx-2hi6.onrender.com/auth/register", data)
                                    res.then(() => {
                                        toast("Accout Created Successfully, you will be redirected shortly", {
                                            autoClose:2500
                                        })
                                        setTimeout(()=> {
                                            router.push("/")
                                        setLoad(false)
                                        }, 3000)
                                    }).catch((err) => {
                                        if(err.message === "Request failed with status code 409"){
                                            toast.error("Account already exist")
                                        }else{
                                            toast.error(err.message)                                        
                                        }
                                        setLoad(false)
                                        console.log(err)
                                    })
                                } catch (error) {
                                    setLoad(false)
                                    console.log(error)
                                }
                            }
                    }>

                    <Button text={load ? <ClipLoader color="white" size={18} /> : "Create Account"} />
                </div>
                <div className="md:hidden text-center mt-[16px] medium">
                    <h2>Not new to AttendX? <a href="/" className="text-[#183DA7]">Sign in</a></h2>
                </div>
            </div>


        </div>
    )
}

export default SignUpMain