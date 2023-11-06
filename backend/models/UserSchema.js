import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: Number },
    photo: { type: String },
    role: {
        type: String,
        enum: ["listener", "admin"],
    default: "listener",
    },
    gender: { type: String, enum: ["male", "female", "other"] },
})

export default mongoose.model("User", UserSchema);