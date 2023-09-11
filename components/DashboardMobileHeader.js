import Image from 'next/image'
import React, { useState } from 'react'
import Sidebar from './Sidebar'

const DashboardMobileHeader = () => {
    const [open, setOpen] = useState(false)
    return (

        <>

            <div className={` fixed h-screen w-full z-50 top-0 animation  ${open ? "right-[0%] " : "right-[100%]"}`}>
                <Sidebar setOpenModal={setOpen} />
            </div>

            <div className='flex justify-between items-center w-full'>
                <Image src="/image/new logo 1.png" alt="logo" width={114} height={32} />

                <Image src="/image/harmburger.svg" width={32} height={32} alt="menu" onClick={() => {
                    setOpen(true)
                }} />

            </div>
        </>
    )
}

export default DashboardMobileHeader