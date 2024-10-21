import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    require: true,
  },
  email: {
    type: String,
    trim: true,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    min: 6,
    max: 64,
  },
});

export default mongoose.model('User', userSchema)
