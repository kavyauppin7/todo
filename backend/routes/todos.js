import express from "express"
import Todo from "../models/Todo.js"

const router = express.Router()

// GET all todos
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 })
    res.json(todos)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// GET single todo
router.get("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id)
    if (!todo) return res.status(404).json({ message: "Todo not found" })
    res.json(todo)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// CREATE todo
router.post("/", async (req, res) => {
  const { title, description } = req.body

  if (!title) {
    return res.status(400).json({ message: "Title is required" })
  }

  const todo = new Todo({
    title,
    description: description || "",
  })

  try {
    const newTodo = await todo.save()
    res.status(201).json(newTodo)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// UPDATE todo
router.patch("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id)
    if (!todo) return res.status(404).json({ message: "Todo not found" })

    if (req.body.title) todo.title = req.body.title
    if (req.body.description !== undefined) todo.description = req.body.description
    if (req.body.status) todo.status = req.body.status

    const updatedTodo = await todo.save()
    res.json(updatedTodo)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// DELETE todo
router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id)
    if (!todo) return res.status(404).json({ message: "Todo not found" })
    res.json({ message: "Todo deleted" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router
