import React, { useEffect, useState } from 'react'
import AttendanceCard from './AttendanceCard'

const AttendanceGrid = ({ attendance, session, course }) => {
    const [user, setUser] = useState()
    const [userArr, setUserArr] = useState([])
    const [sessionArr, setSessionArr] = useState([])
    let sessionarr = []
    let userarr = []
    let percSess = []

    const percentage = Math.round((attendance.length / session.length) * 100)
    let filteredSession = []
    let userSess = []
    course.forEach((course) => filteredSession.push({ "course_code": course.course_code, "length": 0 }))

    useEffect(() => {
        const co = JSON.parse(window.localStorage.getItem("user"))
        if (co) {
            setUser(co.courses)
        }
    }, [])

    useEffect(() => {
        console.log("Cpaal")
        if (user) {
            console.log(user)
            getAttend()
            getUserAtten()
        }
    }, [user])

    const getAttend = () => {
        let arr = []
        let myArr = []
        user.forEach((course) => myArr.push(course.code))
        filteredSession = myArr
        filteredSession.forEach((courses, i) => {
            const sess = session.filter((obj) => courses === obj.course_code)
            arr.push(sess)
        })
        sessionarr = arr
        

        console.log(sessionarr, "Sessoion")

        sessionarr.forEach((arr,i)=> {
            let he = []
            let mm = arr[i]

            console.log(mm, arr.length)
       
        })

        


        // checkSession()
    }


    const getUserAtten = () => {      
        let arr = []  
        let myArr = []
        user.forEach((course) => myArr.push(course.code))
        filteredSession = myArr
        filteredSession.forEach((courses, i) => {
            const sess = attendance.filter((obj) => courses === obj.course_code)
            arr.push(sess)
        })

        userarr = arr

        console.log(userarr, "uuuu")

        userarr.forEach((arr,i)=> {
            let mm = arr[i]

            console.log(mm, arr.length)
        })

        // checkArr()
    }

    const checkSession = () => {
        console.log(sessionArr, "Sess")
    }

    const checkArr = () => {
        console.log(userArr, "userArr")
    }


    // course.forEach(course => {
    //     filteredSession = session.filter((obj) => course.course_code === obj.course_code)
    // });

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