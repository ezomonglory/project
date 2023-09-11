// components/LecturerQRCode.js
import { useEffect, useState } from 'react';
import QRCode from 'qrcode';

const LecturerQRCode = () => {
  const [lecturerId, setLecturerId] = useState('123456789');

  useEffect(() => {
    // Generate the QR code for the lecturerId
    
    
  }, []);

  const generateQRCode = async () => {
    try {
      // Generate the QR code data URL
      const qrDataURL = await QRCode.toDataURL(lecturerId);

      // Display the QR code image
      const img = document.getElementById('lecturer-qr-code');
      img.src = qrDataURL;
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  };

  const handleInputChange = (event) => {
    setLecturerId(event.target.value);
  };

  return (
    <div>
      <h2>Generate Lecturer QR Code</h2>
      <input type="text" value={lecturerId} onChange={handleInputChange} />
      <br />
      <img id="lecturer-qr-code" alt="Lecturer QR Code" />


      <button
      onClick={()=> {
        generateQRCode()
      }}
      >Click</button>
    </div>
  );
};

export default LecturerQRCode;
