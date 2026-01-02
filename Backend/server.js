import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import authRoutes from "./routes/authRoutes.js";


dotenv.config(); 

const app = express();
const port = process.env.PORT || 4000;

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

//API Endpoints

//Home route
app.get("/", (req, res) => {
  res.send("API is working");
});


app.use("/api/auth", authRoutes);



app.listen(port, () => {
  console.log(`The app is listening on ${port}`);
});
