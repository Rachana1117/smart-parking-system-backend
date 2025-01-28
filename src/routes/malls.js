import malls from "../controllers/malls.js";
import express from "express";
const router = express();

router.get("/locations", malls.getAll);
router.get("/admin", malls.getMallByAdmin);
router.get("/", malls.getAllByLocation);
router.post("/", malls.create);

export default router;
