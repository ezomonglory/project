import React from 'react'

const AttendanceCard = ({course, percentage}) => {
  return (
    <div className='bg-white p-[20px] flex flex-col space-y-[24px] rounded-lg '>
        <div className='flex items-center justify-between'>
            <h2 className='text-[#505050] uppercase '>{course}</h2>
        </div>

        <div className='text-left  '>
            <h1 className='text-[#141414] text-[30px] leading-[32px] md:text-[46px] md:leading-[54px] '>{percentage}</h1>
            <h2 className=' text-[#9E9E9E] text-[14px]  '>Class Attended</h2>
        </div>
    </div>
  )
}

export default AttendanceCard