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
            "qrCode":qrCode.text,
            "full_name":user.full_name,
            "matric_number":user.identity_number
        }).then((res)=> {
            console.log(res)                                                
            setBtnLoad(false)
            window.location.href="/students/"
        }).catch((err)=> {
            console.log(err)
        })                
    }






    return (

        <div className='h-screen flex items-center justify-center bg-black p-[20px] '>
            <div className='bg-white  rounded-[8px] md:w-[451px] md:h-[316px] flex flex-col space-y-[32px] py-[40px] px-[40px] mx-auto justify-center items-start'>
                {/* <Image src={icon} width={40} height={40} alt="icon" className='mx-auto' /> */}
                <div className=' flex flex-col space-y-[8px] '>                   
                   {user && (
                    <div>                        
                        <h1>Name: {user.full_name} </h1>
                        <h1>Matric Number: {user.identity_number} </h1>                        
                    </div>
                   )}
                </div>

                <div className='flex  space-x-[32px]  '>
                    <div className='w-[110px] h-[40px]   cursor-pointer bg-[#fff] text-[#323232]  flex items-center justify-center text-center rounded-[4px] leading-[24px] border-[0.5px] border-[#323232]  ' onClick={() => {
                        setOpen(false)
                    }}> Cancel </div>

                    <div className={`w-[110px] h-[40px]  cursor-pointer  text-white  flex items-center justify-center text-center rounded-[4px] leading-[24px] bg-[#183DA7] `}
                        onClick={() => {
                            signAttendance()
                        }}
                    >
                        {btnLoad ? <ClipLoader color="white" size={18} /> : "Submit"}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ScanModal