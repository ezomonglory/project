import Head from 'next/head'
import React, { useState } from 'react'
import StudentHeader from '../../components/StudentHeader'
import Image from 'next/image'
import { QrReader } from 'react-qr-reader';
import AttendanceGrid from '../../components/AttendanceGrid'

const Index = () => {
    const [data, setData] = useState('No result');
    const [scan, setScan] = useState(false);


    const scanCode = () => {
        setScan(true)
    }

    return (
        <div className='w-full'>
            <Head>
                <title>Attend X</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className=" bg-[#F4F4F4] h-full">

                {scan ? <>
                    <QrReader
                        onResult={(result, error) => {
                            if (!!result) {
                                setData(result?.text);
                            }

                            if (!!error) {
                                console.info(error);
                            }
                        }}
                        style={{ width: '100%' }}
                    />
                    <p>{data}</p></> :

                    <>
                        <StudentHeader />
                        <div className='md:px-[128px] mt-[40px] px-[20px]'>
                            <div className='flex items-center justify-between mb-[32px]'>
                                <h1 className='text-[18px] md:text-[30px] medium text-[#141414]'>Class Attendance</h1>
                                <div className='bg-[#183DA7] rounded-md py-[8px] px-[16px] md:flex space-x-[8px] cursor-pointer hidden'>
                                    <Image src="/image/Frame.svg" width={20} height={20} alt="scan" />
                                    <h2 className='text-white'>Scan Code</h2>
                                </div>

                            </div>
                            <AttendanceGrid />
                        </div></>
                }
            </main>

        </div>
    )
}

export default Index