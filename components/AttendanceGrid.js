import React, { useEffect, useState } from 'react'
import { FadeLoader } from 'react-spinners'
import AttendanceCard from './AttendanceCard'
import axios from 'axios'

const AttendanceGrid = () => {
    const [percentage, setPercentage] = useState([])
    const [user, setUser] = useState()
    const [load, setLoad] = useState(false)

    useEffect(() => {
        setLoad(true)
        const use = JSON.parse(window.localStorage.getItem("user"))
        if (use) {
            setUser(use)
        }
    }, [])

    useEffect(() => {
        if (user) {
            console.log({ "userdata": user })
            getPecentage(user?.courses)
        }
    }, [user])




    const getPecentage = (courses) => {
        console.log("getPercentage called")
        console.log(courses)
        courses?.forEach(async element => {
            console.log("courses being searched for")
            await axios.post("https://attendx-2hi6.onrender.com/session/percentage", {
                course_code: element.code,
                name: user.full_name,
                matric_number: user.identity_number

            }).then((res) => {
                console.log("Courses gotten")
                const userAttend = { "course": element.code, "percentage": res.data.percentage }
                setPercentage(prev => [...prev, userAttend])
                console.log(percentage)
                setLoad(false)
            }).catch((err) => {
                console.log(err)
            })

        });
    }


    return (

        <>
            {load ? <div className='h-[50vh] flex items-center justify-center  w-full'>
                < FadeLoader color="#183DA7" />
            </div> :
                <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-y-[24px] md:gap-x-[48px] md:gap-y-[32px]'>

                    {
                        percentage?.map((attend, index) => (
                            <AttendanceCard key={index} course={attend.course} percentage={`${attend.percentage}%`} />
                        ))}


                </div>
            }
        </>

    )
}

export default AttendanceGrid