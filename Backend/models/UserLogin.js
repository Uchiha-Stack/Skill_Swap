import mongoose from 'mongoose';

const userLoginSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  isPublic: { type: Boolean, default: true },
  isBanned: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model('UserLogin', userLoginSchema);
