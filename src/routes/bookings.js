import bookings from '../controllers/bookings.js';
import { Router } from 'express';
const router = Router();

router.post('/', bookings.bookSlot);
router.delete('/', bookings.cancelAllBookings);
router.get('/', bookings.getBySlotId);

export default router;
