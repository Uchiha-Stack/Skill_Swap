import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String },
  location: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePhoto: String,
  skillsOffered: [String],
  skillsWanted: [String],
  availability: [String], // e.g. ["weekends", "evenings"]
  isPublic: { type: Boolean, default: true },
  isAdmin: { type: Boolean, default: false },
  isBanned: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model('User', userSchema);
