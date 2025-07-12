import Swap from '../models/Swap.js';
import User from '../models/User.js';

// Create a new swap request
export const createSwap = async (req, res) => {
  try {
    const { receiver, skillRequested, skillOffered, message } = req.body;
    const requester = req.user.id;

    if (requester === receiver) {
      return res.status(400).json({ message: "You can't request a swap with yourself." });
    }

    const receiverExists = await User.findById(receiver);
    if (!receiverExists || receiverExists.isBanned) {
      return res.status(404).json({ message: 'Receiver not found or banned' });
    }

    const swap = await Swap.create({
      requester,
      receiver,
      skillRequested,
      skillOffered,
      message
    });

    res.status(201).json({ message: 'Swap request sent', swap });
  } catch (err) {
    console.error('Swap creation failed:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get current user's swaps (sent and received)
export const getUserSwaps = async (req, res) => {
  try {
    const userId = req.user.id;

    const swaps = await Swap.find({
      $or: [{ requester: userId }, { receiver: userId }]
    }).populate('requester receiver', 'name email profilePhoto');

    res.status(200).json({ swaps });
  } catch (err) {
    console.error('Failed to fetch swaps:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Accept a swap request
export const acceptSwap = async (req, res) => {
  try {
    const swapId = req.params.id;
    const userId = req.user.id;

    const swap = await Swap.findById(swapId);
    if (!swap) return res.status(404).json({ message: 'Swap not found' });

    if (swap.receiver.toString() !== userId) {
      return res.status(403).json({ message: 'You are not authorized to accept this request' });
    }

    swap.status = 'accepted';
    await swap.save();

    res.status(200).json({ message: 'Swap accepted', swap });
  } catch (err) {
    console.error('Failed to accept swap:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Reject a swap request
export const rejectSwap = async (req, res) => {
  try {
    const swapId = req.params.id;
    const userId = req.user.id;

    const swap = await Swap.findById(swapId);
    if (!swap) return res.status(404).json({ message: 'Swap not found' });

    if (swap.receiver.toString() !== userId) {
      return res.status(403).json({ message: 'You are not authorized to reject this request' });
    }

    swap.status = 'rejected';
    await swap.save();

    res.status(200).json({ message: 'Swap rejected', swap });
  } catch (err) {
    console.error('Failed to reject swap:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Cancel a swap request (by requester)
export const cancelSwap = async (req, res) => {
  try {
    const swapId = req.params.id;
    const userId = req.user.id;

    const swap = await Swap.findById(swapId);
    if (!swap) return res.status(404).json({ message: 'Swap not found' });

    if (swap.requester.toString() !== userId) {
      return res.status(403).json({ message: 'You can only cancel your own swap requests' });
    }

    swap.status = 'cancelled';
    await swap.save();

    res.status(200).json({ message: 'Swap cancelled', swap });
  } catch (err) {
    console.error('Failed to cancel swap:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete a pending swap (by requester)
export const deleteSwap = async (req, res) => {
  try {
    const swapId = req.params.id;
    const userId = req.user.id;

    const swap = await Swap.findById(swapId);
    if (!swap) return res.status(404).json({ message: 'Swap not found' });

    if (
      swap.requester.toString() !== userId ||
      swap.status !== 'pending'
    ) {
      return res.status(403).json({ message: 'Only pending swaps can be deleted by the requester' });
    }

    await swap.deleteOne();
    res.status(200).json({ message: 'Swap deleted' });
  } catch (err) {
    console.error('Failed to delete swap:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
