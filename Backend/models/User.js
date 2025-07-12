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
  ratings: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      rating: { type: Number, min: 0, max: 5, default: 0 },
      comment: String
    }
  ],
  isPublic: { type: Boolean, default: true },
  isAdmin: { type: Boolean, default: false },
  isBanned: { type: Boolean, default: false },
}, { timestamps: true });

// Average rating virtual field
userSchema.virtual('averageRating').get(function () {
  if (!this.ratings || this.ratings.length === 0) return 0;
  const total = this.ratings.reduce((sum, r) => sum + (r.rating || 0), 0);
  return (total / this.ratings.length).toFixed(2);
});

// Enable virtuals in output
userSchema.set('toJSON', { virtuals: true });
userSchema.set('toObject', { virtuals: true });

export default mongoose.model('User', userSchema);
