import User from '../models/User.js';

// Get all public users (with optional filters)
export const getPublicUsers = async (req, res) => {
  try {
    const { skill, availability } = req.query;

    const filter = {
      isPublic: true,
      isBanned: false
    };

    if (skill) {
      filter.$or = [
        { skillsOffered: { $regex: skill, $options: 'i' } },
        { skillsWanted: { $regex: skill, $options: 'i' } }
      ];
    }

    if (availability) {
      filter.availability = { $regex: availability, $options: 'i' };
    }

    const users = await User.find(filter).select(
      'name profilePhoto skillsOffered skillsWanted availability ratings'
    );

    res.status(200).json({ users });
  } catch (err) {
    console.error('Failed to fetch public users:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a single public user's profile by ID
export const getPublicUserById = async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findOne({
      _id: userId,
      isPublic: true,
      isBanned: false
    }).select(
      'name profilePhoto skillsOffered skillsWanted availability ratings createdAt'
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found or is private' });
    }

    res.status(200).json({ user });
  } catch (err) {
    console.error('Failed to fetch user:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
