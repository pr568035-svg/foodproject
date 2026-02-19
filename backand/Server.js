import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import foodRoutes from "./routes/foodroutes.js ";


const app = express();
const PORT = 4000;



app.use(express.json())
app.use(cors());

//db connection
connectDB();

//api endpoints
app.use("/api/food", foodRoutes);

app.get("/", (req, res) => {
    res.send("API is working");
})              

app.listen(PORT, () => {
    console.log(`Server  started on http://localhost:${PORT}`);
})

