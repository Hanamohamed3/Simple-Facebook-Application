
import User from "../../db/models/user.model.js"
import bcrypt from 'bcrypt';


export const addUser = async(req,res)=>{
const {userName,email,password}=req.body;
const userExist= await User.findOne({where:{email}});

if(userExist){
    return res.json({message:"User already exist"});

}
const hashedPass =bcrypt.hashSync(password,8);
const user =await User.create({userName,email,password:hashedPass})
res.json({message:"User created successfully",user})

};



export const login = async(req,res)=>{
const {email,password}=req.body;
const user= await User.findOne({where:{email}});
if(!user){
    return res.json({message:"User not found"});
}
const isPasswordValid= bcrypt.compareSync(password,user.password);
if(!isPasswordValid){
    return res.json({message:"Invalid Password"});
    
}

const loginStatus = await user.update({loginStatus:true});
res.json({message:"User logged in successfully",user})

}


export const logOut=async (req,res)=>{
    const {id}=req.query;
    const loginStatus = await User.update({loginStatus:false},{where:{id}});
    res.json({message:"User loggout out successfully", loginStatus})
}

