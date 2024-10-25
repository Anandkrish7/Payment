const failure = (req, res) => {
  const {
    status,
    amount,
    email,
    phone,
    firstname,
    lastname,
    productinfo,
    txnid,
    payment_source,
    udf1,
  } = req.body;
  
  res.redirect('http://127.0.0.1:5173/failure');
};

export default failure;
