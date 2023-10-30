import { NextFunction,Request,Response } from "express";
import User from "../models/User.js";
import {hash}  from "bcrypt";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // get all users
  try {
    const users = await User.find();
    return res.status(200).json({
      message:"OK",
      users
    })
  } catch (error) {

    return res.status(500).json({
      message:"ERROR",
      error
    })
  }
};


export const userSignup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // get all users
  // 
  
  try {
  //   const name="vardhan";
  // const email="harshavardhan@gmail.com"
  // const password="1234567"
  const {name,email,password}=req.body
    
    const hashPassword= await hash(password,10);
    const user = new User({name,email,password:hashPassword});
    await user.save();
    return res.status(200).json({
      message:"OK",
      id:user._id.toString()
    })
  } catch (error) {

    return res.status(500).json({
      message:"ERROR",
      error
    })
  }
};
