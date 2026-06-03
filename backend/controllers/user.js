import { User } from "../models/userModels.js"
export const Register = async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        if (!fullName || !email || !password) {
            return res.status(401).json({
                message: "Invalid Data",
                success: false
            })
        }

        const user= await User.findOne({email})
        if (user){
            return res.status(401).json({message:"The email is already in Database",success:false})
        }

        await User.create({fullName, email, password})

        res.status(200).json({message:"Account created Sucessfully",success:true})
    }
    catch (err) {

    }

}

