import mongoose from 'mongoose';


const success = async (req, res) => {
    console.log(`request from success: ${JSON.stringify(req.body)}`)
    const { status, amount, email, phone, firstname, lastname, productinfo, txnid, payment_source, udf1  } = req.body
    
    console.log({status, amount, email, phone, firstname, lastname, productinfo, txnid, payment_source, udf1})

    let paymentData = {
        status,
        amount,
        email,
        phone,
        firstname,
        lastname,
        productinfo,
        txnid,
        payment_source,
        plan: udf1,
        subscriptionStartDate: new Date(),
        active: true,
    };
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 1)
    paymentData['subscriptionEndDate'] = endDate

    // Get the default database connection
    const db = mongoose.connection;
    const paymentCollection = db.collection('payments');

    await paymentCollection.insertOne(paymentData);
    res.redirect('http://127.0.0.1:5173/success');
    console.log("Payment saved successfully...")
}


export default success