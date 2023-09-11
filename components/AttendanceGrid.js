import React from 'react'
import AttendanceCard from './AttendanceCard'

const AttendanceGrid = () => {
    
  return (
    <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-y-[24px] md:gap-x-[48px] md:gap-y-[32px]'>
        <AttendanceCard course="csc427" percentage="98%" />
        <AttendanceCard course="csc417" percentage="28%" />
        <AttendanceCard course="csc437" percentage="58%" />
        <AttendanceCard course="csc457" percentage="18%" />
        <AttendanceCard course="mth427" percentage="58%" />
        <AttendanceCard course="phy627" percentage="38%" />
        <AttendanceCard course="bio127" percentage="48%" />
        <AttendanceCard course="chm227" percentage="100%" />
    </div>
  )
}

export default AttendanceGrid