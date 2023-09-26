import React, { useState } from 'react'
import StudentHeader from './StudentHeader'
import StudentSidebar from './StudentSidebar'

const StudentLayout = ({ children }) => {
    const [open, setOpen] = useState(false)
    const g = "hello"


    return (

        <div>
            {
                open ? <StudentSidebar setOpenModal={setOpen} /> :
                    <>
                        <StudentHeader setOpenModal={setOpen} open={open} g={g}  />
                        {children}
                    </>
            }
        </div>
    )
}

export default StudentLayout