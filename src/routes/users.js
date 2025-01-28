import users from "../controllers/users.js";
import { Router } from "express";
const router = Router();

router.post("/", users.create);
router.put("/", users.update);
router.delete("/", users.delete);

export default router;