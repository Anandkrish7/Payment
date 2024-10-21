import axios from "axios";
import CryptoJS from "crypto-js"; // Correct import for CryptoJS
import dotenv from 'dotenv';
dotenv.config(); 

const subscription = async (req, res) => {
  // PayU Test Credentials
  console.log(process.env.KEY)
  const merchantKey = "y3FHyG" // "e9zLGc"; // Replace with your actual merchant key
  const salt = "1fOv13OPs5RgigzEMedlZ0JSEx9z6De3" // "TPzAiC0ZBL3rqLsTQZZcuOCbB0ODx2Zu"; // Replace with your actual salt
  const apiEndpoint = "https://test.payu.in/_payment" //"https://sandboxsecure.payu.in/_payment"; // PayU sandbox/test endpoint

  // Transaction Details
  const txnid = "txn" + new Date().getTime(); // Unique transaction ID
  const amount = "100.00"; // Example amount
  const productInfo = "Test Product";
  const firstName = "John";
  const email = "john@example.com";
  const phone = "7639051376";
  const surl = "http://example.com/success"; // Success URL
  const furl = "http://example.com/failure"; // Failure URL

  // UDF fields (optional but required in the hash calculation)
  const udf1 = ""; // Leave empty or populate if required
  const udf2 = "";
  const udf3 = "";
  const udf4 = "";
  const udf5 = "";

  // Generate the hash string including the UDF fields
  const hashString = `${merchantKey}|${txnid}|${amount}|${productInfo}|${firstName}|${email}|${udf1}|${udf2}|${udf3}|${udf4}|${udf5}||||||${salt}`;
  
  // Generate the hash using SHA512
  const hash = CryptoJS.SHA512(hashString).toString(CryptoJS.enc.Hex);

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
  };

  // Send back the form fields to the client
  res.json({
    url: apiEndpoint, // PayU endpoint
    fields: data,     // The fields that need to be submitted in the form
  });
};

export default subscription;
