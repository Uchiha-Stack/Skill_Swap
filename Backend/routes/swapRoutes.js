import express from 'express';
import {
  createSwap,
  getUserSwaps,
  acceptSwap,
  rejectSwap,
  cancelSwap,
  deleteSwap
} from '../controllers/swapController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);

router.post('/', createSwap);                  // POST /api/swaps
router.get('/', getUserSwaps);                // GET  /api/swaps
router.put('/:id/accept', acceptSwap);        // PUT  /api/swaps/:id/accept
router.put('/:id/reject', rejectSwap);        // PUT  /api/swaps/:id/reject
router.put('/:id/cancel', cancelSwap);        // PUT  /api/swaps/:id/cancel
router.delete('/:id', deleteSwap);            // DELETE /api/swaps/:id

export default router;
