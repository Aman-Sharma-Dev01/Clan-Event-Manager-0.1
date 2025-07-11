import express from 'express';
import { createEvent, deleteEvent } from '../controller/event.controller.js';
import { isAuthentication } from '../middleware/authUser.js';

const router = express.Router();
router.post("/upload",isAuthentication ,createEvent)
router.delete("/:id", isAuthentication, deleteEvent);

export default router;