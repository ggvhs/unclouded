import mongoose from "mongoose";

const ArtistSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: Number },
  photo: { type: String },
  role: {
    type: String,
  },
  bio: { type: String, maxLength: 50 },
  about: { type: String },
});

export default mongoose.model("Artist", ArtistSchema);
