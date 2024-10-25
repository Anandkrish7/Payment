import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from  '../../public/Spectra_Cropped.png'

const Success = () => {
  return (
    <div 
      style={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', // Full viewport height to center vertically
        backgroundColor: '#f0f0f0' // Slightly different background to make card stand out
      }}
    >
      <div 
        style={{ 
          position: 'relative', // Make the card position relative to position the image inside
          padding: '40px', 
          textAlign: 'center', 
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)', // Box shadow on all sides
          borderRadius: '10px', 
          backgroundColor: '#fff',
          maxWidth: '400px',
          width: '90%'
        }}
      >
        {/* Logo/Image in the top-right corner */}
        <img 
          src={logo} // Replace with the actual image URL
          alt="Logo"
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            width: '30px', // Adjust width as needed
          }}
        />

        <h1>Payment Successful</h1>
        <p>
          Your payment was successful. Thank you for your purchase!
        </p>
        <Link to="/login" style={{ textDecoration: 'none', color: 'green', fontSize: '18px' }}> 
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default Success;
