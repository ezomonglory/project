import React from 'react'
import AttendanceCard from './AttendanceCard'

const AttendanceGrid = ({ attendance, session, course }) => {

    const percentage = Math.round((attendance.length/session.length)*100    ) 

    return (
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-y-[24px] md:gap-x-[48px] md:gap-y-[32px]'>
            {course.map((attend, index) => (
                <AttendanceCard key={index} course={attend.course_code} percentage={`${percentage}%`} />
            ))}
            {/* <AttendanceCard course="csc417" percentage="28%" />
        <AttendanceCard course="csc437" percentage="58%" />
        <AttendanceCard course="csc457" percentage="18%" />
        <AttendanceCard course="mth427" percentage="58%" />
        <AttendanceCard course="phy627" percentage="38%" />
        <AttendanceCard course="bio127" percentage="48%" />
        <AttendanceCard course="chm227" percentage="100%" /> */}
        </div>
    )
}

export default AttendanceGrid