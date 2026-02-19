import Foodmodel from "../models/foodmodels.js";
import fs from "fs";

export const createFood = async (req, res) => {
    try {

        // ✅ Check if image exists
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Image file is required"
            });
        }

        // ✅ Get form data
        const { name, description, price, category } = req.body;

        // ✅ Validate required fields
        if (!name || !description || !price || !category) {

            // Delete uploaded image if validation fails
            fs.unlink(`uploads/${req.file.filename}`, () => {});

            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // ✅ Create food item
        const food = new Foodmodel({
            name,
            description,
            price,
            category,
            image: req.file.filename
        });

        await food.save();

        res.status(200).json({
            success: true,
            message: "Food added successfully"
        });

    } catch (error) {

        // Delete image if error happens
        if (req.file) {
            fs.unlink(`uploads/${req.file.filename}`, () => {});
        }

        console.log(error);

        res.status(500).json({
            success: false,
            message: "Failed to add food"
        });
    }
};

export { createFood as addfood };
