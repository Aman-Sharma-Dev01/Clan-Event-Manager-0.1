import express from 'express';
import { createWinners, getAllWinners, deleteWinners } from '../controller/winner.controller.js';
import { isAuthentication } from '../middleware/authUser.js';

const router = express.Router();

// POST /api/winners/add - Create a new winner entry
router.post("/add", isAuthentication, createWinners);

// GET /api/winners/all - Get all winner entries
router.get("/all", getAllWinners);

// DELETE /api/winners/:id - Delete a winner entry
router.delete("/:id", isAuthentication, deleteWinners);

export default router;