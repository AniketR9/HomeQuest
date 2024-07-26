import bcrypt from "bcrypt";

export const register=async (req,res)=>{
    const {username,email,password}=req.body;
    // db operations
    // console.log(req.body);
    // Hash the password
    const hashedPassword= await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    // Create a new user and save to db
}

export const login=(req,res)=>{
    // db operations
}

export const logout=(req,res)=>{
    // db operations
}