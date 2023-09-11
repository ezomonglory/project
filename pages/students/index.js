import Head from 'next/head'
import React, { useState, useRef } from 'react'
import StudentHeader from '../../components/StudentHeader'
import Image from 'next/image'
// import QrReader from 'react-qr-scanner'
import AttendanceGrid from '../../components/AttendanceGrid'
import Scan from '../../components/Scan'
import { QrReader } from 'react-qr-reader';

const Index = () => {
    const [data, setData] = useState('No result');
    const [scanResultFile, setScanResultFile] = useState('');
    const [scan, setScan] = useState(false);
    const qrRef = useRef(null)


    const scanCode = () => {
        setScan(true)
    }

    const onScanFile = () => {
        qrRef.current.openImageDialog();
    }
    const handleErrorFile = (error) => {
        console.log(error);
    }
    const handleScanFile = (result) => {
        if (result) {
            setScanResultFile(result);
        }
    }

    return (
        <div className='w-full'>
            <Head>
                <title>Attend X</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className=" bg-[#F4F4F4] h-full">

                {scan ? <Scan />
                    :
                    <>

                        <StudentHeader />
                        <div className='md:px-[128px] mt-[40px] px-[20px]'>
                            <div className='flex items-center justify-between mb-[32px]'>
                                <h1 className='text-[18px] md:text-[30px] medium text-[#141414]'>Class Attendance</h1>
                                <div className='bg-[#183DA7] rounded-md py-[8px] px-[16px] md:flex space-x-[8px] cursor-pointer hidden' onClick={() => {
                                    setScan(true)
                                    // onScanFile()
                                }}>
                                    <Image src="/image/Frame.svg" width={20} height={20} alt="scan" />
                                    <h2 className='text-white'>Scan Code</h2>
                                </div>
                                <div className='fixed right-[20px] items-center justify-center flex bottom-[20%] bg-[#183DA7] rounded-full w-[48px] h-[48px] md:hidden' onClick={() => {
                                    setScan(true)
                                    // onScanFile()

                                }}>
                                    <Image src="/image/Frame.svg" width={20} height={20} alt="scan" />
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