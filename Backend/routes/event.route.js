import express from 'express';
import { createEvent, deleteEvent, getAllEvents, getMyClanMembers, getMyEvents } from '../controller/event.controller.js';
import { isAuthentication } from '../middleware/authUser.js';

const router = express.Router();
router.post("/upload",isAuthentication ,createEvent)
router.delete("/:id", isAuthentication, deleteEvent);
router.get("/allevents", getAllEvents);
router.get("/myevents", isAuthentication, getMyEvents);

router.get("/my-members", isAuthentication, getMyClanMembers);

export default router;