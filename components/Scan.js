// // import React, { Component } from 'react'
// // import QrReader from 'react-qr-scanner'

// // class Scan extends Component {
// //     constructor(props) {
// //         super(props)
// //         this.state = {
// //             delay: 100,
// //             result: 'No result',
// //         }

// //         this.handleScan = this.handleScan.bind(this)
// //     }
// //     handleScan(data) {
// //         this.setState({
// //             result: data,
// //         })
// //     }
// //     handleError(err) {
// //         console.log("eeee")
// //         console.error(err)
// //     }
// //     render() {
// //         const previewStyle = {
// //             height: 240,
// //             width: 320,
// //         }

// //         return (
// //             <div>
// //                 <QrReader
// //                     key="environment"
// //                     constraints={{
// //                         audio: false,
// //                         video: { facingMode: "environment" }
// //                     }}
// //                     onError={this.handleError}
// //                     onScan={this.handleScan}
// //                 />
// //                 <p>{this.state.result}</p>
// //             </div>
// //         )
// //     }
// // }

// // export default Scan

// import React, { useState } from 'react';
// import { QrReader } from 'react-qr-reader';

// const Scan = (props) => {
//     const [data, setData] = useState('No result ');
//     const handleScan = (data) => {

//         if (data) {
//             alert(data)
//             setData({
//                 qrCodeContent: data
//             });

//         }
//     };

//     const handleError = (err) => {
//         console.error(err);
//     };

//     return (
//         <>
//             <QrReader
//                 constraints={{
//                     facingMode: "environment"
//                 }
//                 }
//                 delay={300}
//                 onError={handleError}
//                 onScan={handleScan}
//                 style={{ width: "100%" }}
//             />
//             <p>{data}</p>
//         </>
//     );
// };

// export default Scan


import React, { Component, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import axios from "axios";
import ScanModal from "./ScanModal";

const oauth = require("axios-oauth-client");
const tokenProvider = require("axios-token-interceptor");

export default class App extends Component {
    state = {
        showCam: false,
        name: "",
        isValid: "",
        validFrom: "",
        validTo: "",
        errors: [],
        scanModal: false
    };

    validPrefix = () => {
        return this.isDcc(this.state.qrCodeContent);
    };

    isDcc = (qrCode = "") => {
        if (!qrCode || typeof qrCode !== "string") {
            return false;
        }

        const identifier = "^HC1:";

        const regex = new RegExp(`${identifier}`, "i");

        return regex.test(qrCode);
    };

    check = (qrCodeContent) => {
        const options = {};
        options.headers = {
            "Content-Type": "application/json",
            accept: "application/json"
        };

        const client = axios.create(options);

        const getOwnerCredentials = oauth.client(axios.create(), {
            url: "https://dcc-verifier.de/oauth/token",
            grant_type: "client_credentials",
            client_id: "45619a959cbbdac7b04abab4fa9c3a78",
            client_secret:
                "93cf32a423e0303e0110de6d3d8df0ff6e480f35e96584ff04cf3ac63567fcd2c4f7530ab3ab918c9f3fe613a14a98fd8060078a1bdc7675ce1a8a5e043b2a65",
            scope: "verify"
        });

        client.interceptors.request.use(
            oauth.interceptor(tokenProvider, getOwnerCredentials)
        );

        const documentTypes = {
            pcrTest: true,
            rapidTest: true,
            vaccination: true,
            recovery: true
        };

        const payload = {
            certificate: qrCodeContent,
            documentTypes: documentTypes
        };

        client
            .post("https://dcc-verifier.de/api/dcc/verify", payload)
            .then((resp) => {
                this.setState({
                    isValid: String(resp.data.isValid),
                    validFrom: resp.data.validFrom,
                    validTo: resp.data.validTo,
                    errors: resp.data.errors
                });
            })
            .catch((error) => {
                if (
                    error.response &&
                    error.response.data.errors &&
                    error.response.data.errors.length > 0
                ) {
                    // Request made and server responded
                    console.log(error.response.data);
                    this.setState({
                        isValid: "false",
                        validFrom: "",
                        validTo: "",
                        errors: error.response.data.errors
                    });
                } else {
                    this.setState({
                        isValid: "false",
                        validFrom: "",
                        validTo: "",
                        errors: [{ message: "unexpeted error" }]
                    });
                }
            });
    };

    handleScan = (data) => {
        if (data) {
            this.setState({
                qrCodeContent: data
            });

            this.setState({ showCam: false });
            this.setState({ scanModal: true });
        }
    };

    handleError = (err) => {
        console.error(err);
    };

    handleClick = () => {
        this.setState({ showCam: !this.state.showCam });
    };


    // handleChange = (event) => {
    //     this.setState({ qrCodeContent: event.target.value });
    // };

    // handleValidate = (event) => {
    //     this.check(this.state.qrCodeContent);
    // };

    // handleClick = () => {
    //     this.setState({ showCam: !this.state.showCam });
    // };

    render() {
        return (
            this.state.scanModal ? <ScanModal qrCode={this.state.qrCodeContent} /> : <div>
                {/* <button onClick={this.handleClick}>
                    {this.state.showCam
                        ? " Close camera reader..."
                        : " Open camera reader"}
                </button> */}
                {/* {this.state.showCam ? ( */}
                <div className="">
                    {/* <div className='h-screen flex items-center justify-center bg-black px-[20px] '>
                            <div className='bg-white  rounded-md md:w-[451px] md:h-[316px] flex flex-col space-y-[32px] py-[20px] px-[28px] mx-auto justify-center items-center'> */}
                    <QrReader
                        constraints={{
                            facingMode: "environment"
                        }}
                        delay={300}
                        onResult={
                            this.handleScan
                        }
                        style={{ width: "100%" }}
                    />
                    {/* </div>

                        </div> */}
                </div>

                {/* ) : null
                } */}

                {/* {
                    this.state.errors.length > 0 && <p>Errors</p> &&
                    this.state.errors.map((error, i) => (
                        <div className="" key={i}>
                            {error.message}
                        </div>
                    ))
                } */}

                {/* <p>QR Code</p> */}
                {/* <textarea
                    rows="10"
                    cols="50"
                    value={this.state.qrCodeContent}
                    onChange={this.handleChange}
                /> */}
            </div >
        );
    }
}