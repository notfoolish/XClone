import express from 'express';
import { getUserProfile } from '../controllers/user.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';
import { updateProfile } from '../controllers/user.controller.js';
import { syncUser } from '../controllers/user.controller.js';
import { getCurrentUser } from '../controllers/user.controller.js';
import { followUser } from '../controllers/user.controller.js';

const router = express.Router();

//public route
router.get("/profile/:username", getUserProfile);

//protected routes
router.post("/sync", protectRoute, syncUser);
router.post("/me", protectRoute, getCurrentUser);
router.put("/profile", protectRoute, updateProfile);
router.post("/follow/:targetUserId", protectRoute, followUser);


export default router;