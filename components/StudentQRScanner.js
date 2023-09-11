// // components/StudentQRScanner.js
// import { useEffect, useRef } from 'react';
// import {QrReader} from 'react-qr-reader';

// const StudentQRScanner = () => {
//   const qrRef = useRef(null);

//   useEffect(() => {
//     if (qrRef.current) {
//     //   scanQRCode();
//     }
//   }, []);

//   const scanQRCode = () => {
//     qrRef.current?.scan();
//   };

//   const handleScan = (data) => {
//     if (data) {
//       // Send the lecturerId to the server for verification
//       fetch(`/api/verify-attendance/${data}`)
//         .then((response) => response.text())
//         .then((message) => {
//           alert(message);
//         //   scanQRCode(); // Continue scanning after successful or failed verification
//         })
//         .catch((err) => console.error('Error verifying attendance:', err));
//     }
//   };

//   const handleError = (err) => {
//     console.error('Error accessing camera:', err);
//   };

//   return (
//     <div>
//       <h2>Scan Lecturer QR Code</h2>
//       <QrReader
//         ref={qrRef}
//         delay={1000}
//         onError={handleError}
//         // onScan={handleScan}
//         style={{ width: '100%', maxWidth: '320px' }}
//       />
//       <p>Scanning...</p>
//     </div>
//   );
// };

// export default StudentQRScanner;


