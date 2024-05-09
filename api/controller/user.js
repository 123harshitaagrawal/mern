import {User} from '../models/User.js'
import bcrypt from 'bcryptjs'
export const register =  async (req,res)=>{
    const {name,gmail,password} = req.body

   try {
    let user = await User.findOne({gmail})

    if(user) return res.json({message:"User Already exist"});

    const hashPass=await bcrypt.hash(password,10)

    user = await User.create({name,gmail,password:hashPass})

    res.json({message:"User Register Successfully",user})
    
   } catch (error) {
    res.json({message:error})
   }
}


