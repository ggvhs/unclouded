import User from '../models/UserSchema.js'
import Artist from '../models/ArtistSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

//REGISTER FUNCTION 
export const register = async(req,res) => {

    const {email, password, name, role, photo, gender} = req.body
    try {
        let user = null

        if(role === 'listener'){
            user = await User.findOne({email})
        }
        else if(role === 'artist'){
            user = await Artist.findOne({email})
        }

        //Check for existing user
        if (user){
            return res.status(400).json({message:'User already exist'})
        }

        //Hashes password using salt
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password,salt)

        if(role === 'listener'){
            user = new User({
                name,
                email,
                password: hashPassword, // used the hashed password
                photo,
                gender,
                role
            })
        }

        else if(role === 'Artist'){
            user = new Artist({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            })
        }

        await user.save()

        res.status(200).json({success: true, message:'user successfully created'})
    } catch (error) {
        res.status(500).json({success: false, message: 'Internal server error, Try again'})
    }
}

// LOGIN FUNCTION
export const login = async(req,res) => {
    try {
        
    } catch (error) {
        
    }
}