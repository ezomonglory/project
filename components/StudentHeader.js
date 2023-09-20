import Image from 'next/image'
import React from 'react'
import Navlink from './Navlink'
import { useRouter } from 'next/navigation'

const StudentHeader = () => {

    const router = useRouter()

    return (

        <div className='flex space-x-[32px] items-center justify-between md:py-[20px] md:px-[20px] bg-[#F4F4F4]  border-[0.5px] border-b-[#D9D9D9] border-transparent'>
            <div className='flex space-x-[32px] items-center'>
                <Image src="/image/studlogo.svg" width={114} height={32} alt="logo" />
                <div className='flex space-x-[16px]  '>
                    <Navlink href="/students">
                        <h1 className=' text-[16px] medium ' >Attendance</h1>
                    </Navlink>

                    <Navlink href="/students/course">
                        <h1 className=' text-[16px] medium '>Course</h1>
                    </Navlink>
                </div>
            </div>

            <div className='border-[0.5px] cursor-pointer border-[#183DA7] rounded-lg text-[#9E9E9E] py-[2px] px-[16px] '
            onClick={()=> {
                router.push("/SignIn")
            }}
            >
                Logout
            </div>
        </div>

    )
}

export default StudentHeader