import React from 'react'
import Sidebar from './Sidebar'
import Image from 'next/image'

const CourseModal = ({text, icon, color, setOpen, texting}) => {
    return (

      <div className='h-screen flex items-center justify-center bg-black px-[20px] '>
          <div className='bg-white  rounded-md md:w-[451px] md:h-[316px] flex flex-col space-y-[32px] py-[20px] px-[28px] mx-auto justify-center items-center'>
            <Image src={icon} width={40} height={40} alt="icon" className='mx-auto' />
            <div className=' flex flex-col space-y-[8px] '>
                <h1 className=' text-black text-[20px] text-center '>You are about to {text} course</h1>
                <p className='text-[#9E9E9E] text-[14px] text-center leading-[22px] ' >Are you certain you wish to delete this course? This action
                    will result in {texting} of the course’s attendance.</p>
            </div>

            <div className='flex  space-x-[24px]  '>
                <div className='w-[150px] h-[40px]   cursor-pointer bg-[#fff] text-[#323232]  flex items-center justify-center text-center rounded-md leading-[24px] border-[0.5px] border-[#323232]  ' onClick={()=> {
                    setOpen(false)
                }}> Cancel </div>

                <div className={`w-[150px] h-[40px]  cursor-pointer  text-white  flex items-center justify-center text-center rounded-md leading-[24px]  ${color}` } > {text} </div>

            </div>
        </div>
      </div>
    )
}

export default CourseModal