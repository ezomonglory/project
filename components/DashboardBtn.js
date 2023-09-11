import React from 'react'

const DashboardBtn = ({ text, icon }) => {
    return (

        <div className='  flex space-x-[8px] cursor-pointer bg-[#183DA7] text-white  py-[12px] px-[16px] text-center rounded-md leading-[24px] ' > <span>{icon}</span>  <span className='text-[16px] leading-[24px] font-[500] '>{text}</span> </div>


    )
}

export default DashboardBtn