import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Image from 'next/image'
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader";
import { useRouter } from 'next/router';

const ScanModal = ({ qrCode }) => {

    const [btnLoad, setBtnLoad] = useState(false)
    const [user, setUser] = useState()
    const [check, setCheck] = useState([])
    const router = useRouter()

    // console.log(router.pathname)

    useEffect(() => {
        const user = JSON.parse(window.localStorage.getItem("user"))
        if (user) {
            console.log(user)
            setUser(user)
        }
    }, [])

    // console.log(qrCode.text, user)



    const signAttendance = async () => {
        setBtnLoad(true)

        await axios.post("https://attendx-2hi6.onrender.com/session/sign-qrCode", {
            "qrCode": qrCode.text,
            "full_name": user.full_name,
            "matric_number": user.identity_number
        }).then((res) => {
            console.log(res)
            setBtnLoad(false)
            window.location.href = "/students/"
        }).catch((err) => {
            console.log(err)
        })
    }






    return (

        <div className='h-screen flex items-center justify-center bg-black p-[20px] '>
            <div className='bg-white  rounded-[8px] md:w-[451px] md:h-[316px] flex flex-col space-y-[32px] py-[40px] px-[40px] mx-auto justify-center items-center'>

                <div className='flex flex-col items-center space-y-[8px]'>
                    <h1 className='text-[#8a8a8a] medium text-[20px] leading-[24px] text-center ' >Student Details</h1>

                    <div className=' flex flex-col space-y-[8px] '>
                        {user && (
                            <div className='flex items-center flex-col' >
                                <h1 className='capitalize' >Name: {user.full_name} </h1>
                                <h1 className='' >Matric Number:  <span className='uppercase' >{user.identity_number} </span> </h1>
                            </div>
                        )}
                    </div>
                </div>

                <div className='flex  space-x-[32px]  '>
                    <div className='w-[110px] h-[40px]   cursor-pointer bg-[#fff] text-[#323232]  flex items-center justify-center text-center rounded-[4px] medium leading-[24px] border-[1px] border-[#cdced9]  ' onClick={() => {
                        setOpen(false)
                    }}> Cancel </div>

                    <div className={`w-[110px] h-[40px]  cursor-pointer  text-white  flex items-center justify-center text-center rounded-[4px] medium leading-[24px] bg-[#183DA7] `}
                        onClick={() => {
                            signAttendance()
                        }}
                    >
                        {btnLoad ? <ClipLoader color="white" size={18} /> : "Confirm"}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ScanModal