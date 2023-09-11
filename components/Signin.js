/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from "react"
import Button from "./Button"
import InputField from "./InputField"
import { useRouter } from "next/router"


const Signin = () => {
    const [student, setStudent] = useState(false)
    const router = useRouter()


    return (
        <div className=" ">
            <div className="flex flex-col space-y-[24px] md:space-y-[32px] mb-[16px]">
                <h1 className=" text-[#141414] text-[24px] md:text-[30px] text-center md:leading-[38px] medium mt-[5px] ">Sign in to AttendX</h1>
                <div className="mx-auto flex flex-row bg-[#E4E4E4] rounded-full p-[8px] cursor-pointer">
                    <div className={`text-[14px] font-[500] rounded-full leading-[24px] px-[40px] py-[8px]  ${student ? "text-[#9E9E9E] " : "text-[#141414] bg-white"}`} onClick={() => {
                        setStudent(false)
                    }}>Lecturer</div>
                    <div className={`text-[14px] font-[500] rounded-full leading-[24px] px-[40px] py-[8px] ${!student ? "text-[#9E9E9E]" : "text-[#141414] bg-white"}`} onClick={() => {
                        setStudent(true)
                    }}>Student</div>
                </div>
            </div>

            <div className="flex space-y-[16px] flex-col">
                <div className="space-y-[8px]  ">
                    <InputField label={student ? "Matric No" : "Staff ID"} type="text" />
                </div>

                <div className="">
                    <InputField label={"Password"} type="text" />
                </div>
            </div>

            <h1 className=' text-[#183DA7] medium '>Forgot Password ?</h1>


            <div className="mt-[32px]" onClick={
                ()=> {
                    router.push("/admin/Student")
                }
            }>
            <Button text="Sign in"  />
            <div className="md:hidden text-center mt-[10px] medium">
                    <h2>Dont have an account? <a href="/" className="text-[#183DA7]">Create Account</a></h2>
                </div>
            </div>
        </div>
    )
}

export default Signin