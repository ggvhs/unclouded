import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 3001

const corsOptions = {
    origin:true
}

// MIDDLEWARE ADDED 
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))

app.get('/', (req,res) =>{
    res.send('Api is working')
})

//DATABASE CONNECTION 
mongoose.set('strictQuery', false)
const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        console.log('MongoDB is connected :D')
    } catch (error) {
        console.log('Mongo database connection failed')
    }
}

// PORT LISTENER 
app.listen(port, () =>{
    connectDB()
    console.log(`server is running on port ${port} :D`)
})