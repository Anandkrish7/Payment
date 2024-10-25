import mongoose from 'mongoose';

const getSubscription = async (req,res) => {
    const {email} = req.query
    console.log('getSubscription', email)

    const db = mongoose.connection;
    const paymentCollection = db.collection('payments');
    const result = await paymentCollection.findOne({email});
    console.log(result)
    res.send(result)
    return
}

export default getSubscription