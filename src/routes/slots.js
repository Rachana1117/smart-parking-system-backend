import slots from "../controllers/slots.js";
import { Router } from "express";
const router = Router();

router.get('/floors', slots.getFloors);
router.get('/avail', slots.isAvailable);
router.get('/admin', slots.getUserDetailsBySlotId);
router.get('/', slots.getSlotsByFloor);
router.post('/', slots.create);
router.put('/', slots.update);

export default router;