import express from "express";
import { addfood } from "../controllers/foodcontrollers.js";
import multer from "multer";

const router = express.Router();

// Image storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); 
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

router.post("/add", upload.single("image"), addfood);

export default router;
