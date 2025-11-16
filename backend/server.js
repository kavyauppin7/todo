import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import todoRoutes from "./routes/todos.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const MONGODB_URI = "mongodb+srv://ku07:0711@habit-tracker.3aisvoy.mongodb.net/?appName=habit-tracker";
// Middleware

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  }),
)
app.use(express.json())

// MongoDB Connection
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err))

// Routes
app.use("/api/todos", todoRoutes)

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "Backend is running" })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
