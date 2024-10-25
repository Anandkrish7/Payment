import axios from "axios";
import CryptoJS from "crypto-js"; // Correct import for CryptoJS
import dotenv from 'dotenv';
dotenv.config(); 

const subscription = async (req, res) => {
  // PayU Test Credentials
  console.log(process.env.KEY)
  const { amount, plan, userID } = req.body;
  const merchantKey =  process.env.KEY  
  const salt =  process.env.SALT  
  const apiEndpoint = process.env.PAYU_URL

  // Transaction Details
  const txnid = "txn" + new Date().getTime(); // Unique transaction ID
  const productInfo = "Test Product";
  const firstName = "Naveen";
  const email = userID;
  const phone = "7639051376";
  const surl = "http://localhost:8000/api/success" //"http://127.0.0.1:5173/success"; // Success URL 
  const furl = "http://localhost:8000/api/failure"; // Failure URL
  console.log('&&&&&&&&&&',email)
  // UDF fields (optional but required in the hash calculation)
  const udf1 = plan; // Leave empty or populate if required
  const udf2 = "";
  const udf3 = "";
  const udf4 = "";
  const udf5 = "";

  // Generate the hash string including the UDF fields
  const hashString = `${merchantKey}|${txnid}|${amount}|${productInfo}|${firstName}|${email}|${udf1}|${udf2}|${udf3}|${udf4}|${udf5}||||||${salt}`;
  
  // Generate the hash using SHA512
  const hash = CryptoJS.SHA512(hashString).toString(CryptoJS.enc.Hex);

  console.log('udf1 value:', udf1);
  console.log('Hash String for transaction:', hashString);
  console.log('Generated Hash:', hash);
  
  console.log('*********',plan)

  // Prepare the data for sending (form fields)
  const data = {
    key: merchantKey,
    txnid: txnid,
    amount: amount,
    productinfo: productInfo,
    firstname: firstName,
    email: email,
    phone: phone,
    surl: surl,
    furl: furl,
    hash: hash, // Correctly calculated hash
    udf1: udf1,
  };

  console.log('data',data)

  // Send back the form fields to the client
  res.json({
    url: apiEndpoint, // PayU endpoint
    fields: data,     // The fields that need to be submitted in the form
  });
};

export default subscription;
