import React from 'react';
import { Link } from 'react-router-dom'; 

const Failure = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}> {/* Centering the content */}
      <h1>Payment Failure</h1>
      <p>
        Unfortunately, your payment was not successful. 
      </p>
      <Link to="/" style={{ textDecoration: 'none', color: 'blue', fontSize: '18px' }}> 
        Try Again
      </Link>
    </div>
  );
};

export default Failure;
