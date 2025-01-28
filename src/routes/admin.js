import admin from "../controllers/admin.js";
import express from "express";
const router = express();

router.post('/register', admin.register);
router.post('/login', admin.login);

export default router;