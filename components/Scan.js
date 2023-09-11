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
//     const [data, setData] = useState('No result yet');
//    const  handleScan = (data) => {
//         if (data) {
//          setData({
//             qrCodeContent: data
//           });
              
//         }
//       };
    
//      const  handleError = (err) => {
//         console.error(err);
//       };

//     return (
//         <>
//             <QrReader
//               delay={300}
//               onError={handleError}
//               onScan={handleScan}
//               style={{ width: "100%" }}
//             />
//             <p>{data}</p>
//         </>
//     );
// };

// export default Scan

import React, { Component } from "react";
import {QrReader} from "react-qr-reader";


export default class Scan extends Component {
  state = {
    showCam: false,
    name: "",
    isValid: "",
    validFrom: "",
    validTo: "",
    errors: []
  };

  
   
  handleScan = (data) => {
    if (data) {
      this.setState({
        qrCodeContent: data
      });

      this.setState({ showCam: false });
    }
  };

  handleError = (err) => {
    console.error(err);
  };

  handleClick = () => {
    this.setState({ showCam: !this.state.showCam });
  };

  handleChange = (event) => {
    this.setState({ qrCodeContent: event.target.value });
  };

  handleValidate = (event) => {
    this.check(this.state.qrCodeContent);
  };

  handleClick = () => {
    this.setState({ showCam: !this.state.showCam });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.showCam
            ? " Close camera reader..."
            : " Open camera reader"}
        </button>
        {this.state.showCam ? (
          <div>
            <QrReader
              delay={300}
              onError={this.handleError}
              onScan={this.handleScan}
              style={{ width: "100%" }}
            />
          </div>
        ) : null}
        <table>
          <tbody>
            <tr>
              <td>Valid:</td>
              <td>{this.state.isValid}</td>
            </tr>
            <tr>
              <td>Valid from:</td>
              <td>{this.state.validFrom}</td>
            </tr>
            <tr>
              <td>Valid to:</td>
              <td>{this.state.validTo}</td>
            </tr>
          </tbody>
        </table>

        {this.state.errors.length > 0 && <p>Errors</p> &&
          this.state.errors.map((error, i) => (
            <div className="" key={i}>
              {error.message}
            </div>
          ))}

        <p>QR Code</p>
        <textarea
          rows="10"
          cols="50"
          value={this.state.qrCodeContent}
          onChange={this.handleChange}
        />        
        
      </div>
    );
  }
}
