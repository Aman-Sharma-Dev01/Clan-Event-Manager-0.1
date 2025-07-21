import { Winner } from "../models/winner.model.js";
import { v2 as cloudinary } from "cloudinary";

// Helper function to upload a file to Cloudinary
const uploadToCloudinary = async (file) => {
  if (!file) return null;
  return await cloudinary.uploader.upload(file.tempFilePath);
};

// 1. CREATE WINNERS
export const createWinners = async (req, res) => {
  try {
    // Only allow specific clan admin IDs (same as your event controller)
    const allowedAdmins = [
      "6870f6f9436c91c3428aa9b2",
      "6870fbc9883f05472f4eacaf",
      "6870fb4a0cd078b2ab0b02e0",
      "6870fc10f93932714cff478a"
    ];

    if (!allowedAdmins.includes(req.user._id.toString())) {
      return res.status(403).json({ message: "Only clan admins can add winners." });
    }

    // Check for required files
    if (!req.files || !req.files.winner1_photo || !req.files.winner2_photo || !req.files.winner3_photo) {
      return res.status(400).json({ message: "All 3 winner photos are required." });
    }
    
    const { winner1_photo, winner2_photo, winner3_photo } = req.files;

    // Check for required text fields
    const { eventHeading, winner1_name, winner2_name, winner3_name } = req.body;
    if (!eventHeading || !winner1_name || !winner2_name || !winner3_name) {
      return res.status(400).json({ message: "Event heading and all 3 winner names are required." });
    }

    // Upload all 3 images to Cloudinary in parallel for efficiency
    const [winner1Result, winner2Result, winner3Result] = await Promise.all([
      uploadToCloudinary(winner1_photo),
      uploadToCloudinary(winner2_photo),
      uploadToCloudinary(winner3_photo),
    ]);

    if (!winner1Result || !winner2Result || !winner3Result) {
      return res.status(500).json({ message: "Error uploading one or more images to Cloudinary." });
    }

    const winnerData = {
      eventHeading,
      winner1: {
        name: winner1_name,
        photo: { public_id: winner1Result.public_id, url: winner1Result.secure_url },
      },
      winner2: {
        name: winner2_name,
        photo: { public_id: winner2Result.public_id, url: winner2Result.secure_url },
      },
      winner3: {
        name: winner3_name,
        photo: { public_id: winner3Result.public_id, url: winner3Result.secure_url },
      },
      createdBy: req.user._id,
    };

    const winners = await Winner.create(winnerData);

    res.status(201).json({
      message: "Winners added successfully!",
      winners,
    });
  } catch (error) {
    console.log("Error creating winners:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

// 2. GET ALL WINNERS (Public)
export const getAllWinners = async (req, res) => {
  try {
    const winners = await Winner.find().sort({ createdAt: -1 }); // Newest first
    res.status(200).json({ winners });
  } catch (error) {
    console.error("Error fetching all winners:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// 3. DELETE WINNERS
export const deleteWinners = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const winnerDoc = await Winner.findById(id);
    if (!winnerDoc) {
      return res.status(404).json({ message: "Winner entry not found." });
    }

    // Optional: Only allow the creator to delete
    if (winnerDoc.createdBy.toString() !== userId.toString()) {
      return res.status(403).json({ message: "You are not authorized to delete this." });
    }

    // Delete all 3 images from Cloudinary in parallel
    await Promise.all([
      cloudinary.uploader.destroy(winnerDoc.winner1.photo.public_id),
      cloudinary.uploader.destroy(winnerDoc.winner2.photo.public_id),
      cloudinary.uploader.destroy(winnerDoc.winner3.photo.public_id),
    ]);

    // Delete the document from MongoDB
    await Winner.findByIdAndDelete(id);

    res.status(200).json({ message: "Winner entry deleted successfully." });
  } catch (error) {
    console.error("Error deleting winners:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};