// import React, { Component } from 'react'
// import QrReader from 'react-qr-scanner'

// class Scan extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             delay: 100,
//             result: 'No result',
//         }

//         this.handleScan = this.handleScan.bind(this)
//     }
//     handleScan(data) {
//         this.setState({
//             result: data,
//         })
//     }
//     handleError(err) {
//         console.log("eeee")
//         console.error(err)
//     }
//     render() {
//         const previewStyle = {
//             height: 240,
//             width: 320,
//         }

//         return (
//             <div>
//                 <QrReader
//                     key="environment"
//                     constraints={{
//                         audio: false,
//                         video: { facingMode: "environment" }
//                     }}
//                     onError={this.handleError}
//                     onScan={this.handleScan}
//                 />
//                 <p>{this.state.result}</p>
//             </div>
//         )
//     }
// }

// export default Scan

import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const Scan = (props) => {
    const [data, setData] = useState('No result yet');
   const  handleScan = (data) => {
        if (data) {
         setData({
            qrCodeContent: data
          });
              
        }
      };
    
     const  handleError = (err) => {
        console.error(err);
      };

    return (
        <>
            <QrReader
              delay={300}
              onError={handleError}
              onScan={handleScan}
              style={{ width: "100%" }}
            />
            <p>{data}</p>
        </>
    );
};

export default Scan