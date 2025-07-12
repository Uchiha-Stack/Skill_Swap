import mongoose from 'mongoose';

const swapSchema = new mongoose.Schema({
  requester: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  receiver: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  skillRequested: String,
  skillOffered: String,
  status: { type: String, enum: ['pending', 'accepted', 'rejected', 'cancelled'], default: 'pending' },
  message: String,
}, { timestamps: true });

export default mongoose.model('Swap', swapSchema);
