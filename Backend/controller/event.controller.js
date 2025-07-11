import mongoose, { mongo } from "mongoose";
import { Event } from "../models/event.model.js";
import { v2 as cloudinary } from "cloudinary";
import { User } from "../models/user.model.js";


export const createEvent = async (req, res) => {
  try {
    // Only allow specific 4 clan admin IDs
const allowedAdmins = [
  "6870f6f9436c91c3428aa9b2",
  "6870fbc9883f05472f4eacaf",
  "6870fb4a0cd078b2ab0b02e0",
  "6870fc10f93932714cff478a"
];

if (!allowedAdmins.includes(req.user._id.toString())) {
  return res.status(403).json({ message: "Only clan admins can create events." });
}
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ message: "Event Image is required" });
    }
    const { poster } = req.files;
    const allowedFormats = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedFormats.includes(poster.mimetype)) {
      return res.status(400).json({
        message: "Invalid photo format. Only jpg and png are allowed",
      });
    }
    const { EventTitle, Description, Category, Date , Time , Location , Reward , Requirements} = req.body;
    if (!EventTitle || !Description || !Category || !Date || !Time || !Location || !Reward) {
      return res
        .status(400)
        .json({ message: "title, category & description are required fields" });
    }
    const clanName = req?.user?.clanName;
    const createdBy = req?.user?._id;

    const cloudinaryResponse = await cloudinary.uploader.upload(
      poster.tempFilePath
    );
    if (!cloudinaryResponse || cloudinaryResponse.error) {
      console.log(cloudinaryResponse.error);
    }
    const eventData = {
      EventTitle,
      Description,
      Category,
      clanName,
      Date,
      Time,
      Location,
      Reward,
      Requirements,
      createdBy,
      poster: {
        public_id: cloudinaryResponse.public_id,
        url: cloudinaryResponse.url,
      },
    };
    const event = await Event.create(eventData);

    res.status(201).json({
      message: "Event created successfully",
      event,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Internal Server error" });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const eventId = req.params.id;

    // Get the logged-in user
    const userId = req.user._id;

    // Find the event by ID
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // ✅ Optional: Only allow creator to delete
    if (event.createdBy.toString() !== userId.toString()) {
      return res.status(403).json({ message: "You are not authorized to delete this event" });
    }

    // ✅ Delete image from Cloudinary
    await cloudinary.uploader.destroy(event.poster.public_id);

    // ✅ Delete event from MongoDB
    await Event.findByIdAndDelete(eventId);

    return res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error("Error deleting event:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// 1. Get All Events (Public)
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ Date: -1 }); // newest first
    res.status(200).json({ events });
  } catch (error) {
    console.error("Error fetching all events:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// 2. Get Logged-in Clan’s Events (Protected)
export const getMyEvents = async (req, res) => {
  try {
    const userId = req.user._id;
    const events = await Event.find({ createdBy: userId }).sort({ Date: -1 });

    res.status(200).json({ events });
  } catch (error) {
    console.error("Error fetching my events:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
// controller/clan.controller.js

export const getMyClanMembers = async (req, res) => {
  try {
    const clanName = req.user.clanName;

    if (!clanName) {
      return res.status(400).json({ message: "Clan not found for this user" });
    }

    const members = await User.find({ clanName }, "Firstname Lastname email role");

    res.status(200).json({
      clan: clanName,
      members,
    });
  } catch (error) {
    console.error("Error fetching clan members:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
