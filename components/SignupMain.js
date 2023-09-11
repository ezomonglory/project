/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from "react"
import Button from "./Button"
import InputField from "./InputField"
import { Router, useRouter } from "next/router"


const SignUpMain = () => {
    const [student, setStudent] = useState(false)
    const router = useRouter()

    useEffect(() => {
        console.log("hey student ")
    }, [student])

    return (
        <div className="space-y-[32px]">

            <div className="space-y-[16px] md:space-y-[24px]">

                <div className="flex flex-col  md:space-y-[32px] mb-[16px]">
                    <h1 className="hidden md:block text-[#141414] md:text-[30px] medium text-center md:leading-[38px]  ">Sign up to AttendX</h1>

                    <h1 className="block md:hidden medium mt-[5px] text-[#141414] text-[24px] text-center leading-[32px]  ">Create an account</h1>
                    <div className="mx-auto flex flex-row bg-[#E4E4E4] rounded-full p-[8px] cursor-pointer mt-[40px]">
                        <div className={`text-[14px] medium font-[500] rounded-full leading-[24px] px-[40px] py-[8px]  ${student ? "text-[#9E9E9E] " : "text-[#141414] bg-white"}`} onClick={() => {
                            setStudent(false)
                        }}>Lecturer</div>
                        <div className={`text-[14px] medium font-[500] rounded-full leading-[24px] px-[40px] py-[8px] ${!student ? "text-[#9E9E9E]" : "text-[#141414] bg-white"}`} onClick={() => {
                            setStudent(true)
                        }}>Student</div>
                    </div>
                </div>


                <div className="w-full">
                    <InputField label={"Full Name"} type="text" />
                </div>

                <div className="w-full">
                    <InputField label={student ? "Matric No" : "Staff ID"} type="text" />
                </div>

                <div className="w-full">
                    <InputField label={"Password"} type="text" />
                </div>
            </div>

            <div>
                <Button text="Create Account" />
                <div className="md:hidden text-center mt-[10px] medium">
                    <h2>Have an account? <a href="/SignIn" className="text-[#183DA7]">Login</a></h2>
                </div>
            </div>


        </div>
    )
}

export default SignUpMain