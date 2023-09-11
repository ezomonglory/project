import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { useRouter } from 'next/router'

const StudentNoCourse = () => {
    const Router = useRouter()
    return (
        <div className='w-full h-[80vh] md:h-full flex items-center justify-center bg-[#F4F4F4]'>
            <div className='flex flex-col space-y-[32px] items-center justify-center md:w-[424px]'>
                <Image src="/image/board.svg" width={405} height={220} alt="image" />
                <div className='flex flex-col space-y-[16px] items-center justify-center text-center '>
                   <p> Hello Glory, To get started, kindly select the courses you will be teaching. Click the button below to initiate your course selection process.</p>
                    <div className='hidden md:flex bg-[#183DA7] px-[16px] py-[8px]  space-x-[8px] text-white items-center rounded-md cursor-pointer text-[14px] newqrcode'
                        onClick={() => {
                            Router.push("/admin/AddCourse")
                        }}
                    >
                        <Image src="/image/Frame.svg" height={20} width={20} alt="qr" /> <span>Add Course</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentNoCourse