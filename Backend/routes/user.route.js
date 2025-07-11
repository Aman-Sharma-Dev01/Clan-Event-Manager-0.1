import express from 'express';
import { getMyProfile, login, logout, register,getUserProfile } from '../controller/user.controller.js';
import { isAuthentication } from '../middleware/authUser.js';

const router = express.Router();
router.post("/register",register)
router.post("/login",login)
router.get('/logout',isAuthentication,logout)
router.get('/get-my-profile',isAuthentication,getMyProfile)
router.get('/profile', isAuthentication, getUserProfile);


export default router;