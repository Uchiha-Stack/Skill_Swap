import User from '../models/User.js';

export const rateUser = async (req, res) => {
  try {
    const raterId = req.user.id;       // Authenticated user giving the rating
    const { userId } = req.params;     // Target user ID
    const { rating, comment } = req.body;

    if (!rating || rating < 0 || rating > 5) {
      return res.status(400).json({ message: 'Rating must be between 0 and 5' });
    }

    if (raterId === userId) {
      return res.status(403).json({ message: 'You cannot rate yourself.' });
    }

    const targetUser = await User.findById(userId);

    if (!targetUser) {
      return res.status(404).json({ message: 'Target user not found.' });
    }

    // Check if rating already exists from this user
    const existingIndex = targetUser.ratings.findIndex(
      (r) => r.userId.toString() === raterId
    );

    if (existingIndex !== -1) {
      // Update existing rating
      targetUser.ratings[existingIndex].rating = rating;
      targetUser.ratings[existingIndex].comment = comment;
    } else {
      // Add new rating
      targetUser.ratings.push({
        userId: raterId,
        rating,
        comment
      });
    }

    await targetUser.save();

    res.status(200).json({
      message: 'Rating submitted successfully',
      ratings: targetUser.ratings
    });
  } catch (err) {
    console.error('Error submitting rating:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
