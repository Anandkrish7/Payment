import User from "../models/user.js";
import { hashPassword, comparePassword } from "../helpers/auth.js";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    // validation
    const { name, email, password } = req.body;
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be 6 character",
      });
    }
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is taken",
      });
    }
    // hash password
    const hashedPassword = await hashPassword(password);
    try {
      const user = await User({
        name,
        email,
        password: hashedPassword,
      }).save();
      
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      const { password, ...rest } = user._doc;
      return res.json({
        success: "User has been Registered Successfully",
        token,
        rest,
      });
    } catch (error) {
      console.error(error);
    }
  } catch (error) {
    console.error(error);
  }
};

const login = async (req, res) => {
  const { email } = req.body;

  // check email
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({
      error: "No user found",
    });
  }
  // check password
  const match = await comparePassword(req.body.password, user.password);
  if (!match) {
    return res.json({
      error: "Wrong password",
    });
  }
  // create token
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  const { password, ...rest } = user._doc;

  res.json({
    token,
    user: rest,
  });
};

export { register, login };
