import User from '../models/User.js';

// Compare arrays ignoring order
const arraysEqual = (a, b) => {
  if (!Array.isArray(a) || !Array.isArray(b)) return false;
  return a.length === b.length && a.every(val => b.includes(val));
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.user.id; // assuming JWT middleware attaches user
    const existingUser = await User.findById(userId);

    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    const {
      name,
      location,
      profilePhoto,
      skillsOffered,
      skillsWanted,
      availability,
      isPublic
    } = req.body;

    // Check if data has changed
    const hasChanged =
      name !== existingUser.name ||
      location !== existingUser.location ||
      profilePhoto !== existingUser.profilePhoto ||
      isPublic !== existingUser.isPublic ||
      !arraysEqual(skillsOffered, existingUser.skillsOffered) ||
      !arraysEqual(skillsWanted, existingUser.skillsWanted) ||
      !arraysEqual(availability, existingUser.availability);

    if (!hasChanged) {
      return res.status(200).json({
        message: 'No changes detected.',
        user: existingUser
      });
    }

    // Update only the fields provided
    if (name !== undefined) existingUser.name = name;
    if (location !== undefined) existingUser.location = location;
    if (profilePhoto !== undefined) existingUser.profilePhoto = profilePhoto;
    if (skillsOffered !== undefined) existingUser.skillsOffered = skillsOffered;
    if (skillsWanted !== undefined) existingUser.skillsWanted = skillsWanted;
    if (availability !== undefined) existingUser.availability = availability;
    if (isPublic !== undefined) existingUser.isPublic = isPublic;

    const updatedUser = await existingUser.save();

    res.status(200).json({
      message: 'User updated successfully',
      user: updatedUser
    });

  } catch (err) {
    console.error('Error updating user:', err);
    res.status(500).json({ message: 'Server error' });
  }
};



export const getUser = async (req, res) => {
  try {
    const userId = req.user.id; // assuming JWT middleware attaches user
    const user = await User.findById(userId).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({
      message: 'User fetched successfully',
      user
    });

  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
