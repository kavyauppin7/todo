"use client"

import { useState, useEffect } from "react"
import TodoList from "@/frontend/src/components/TodoList"
import AddTodoForm from "@/frontend/src/components/AddTodoForm"
import "@/frontend/src/index.css"

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

export default function Page() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch todos
  const fetchTodos = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_URL}/todos`)
      if (!response.ok) throw new Error("Failed to fetch todos")
      const data = await response.json()
      setTodos(data)
      setError(null)
    } catch (err) {
      setError(err.message)
      console.error("Error fetching todos:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  // Add todo
  const handleAddTodo = async (title, description) => {
    try {
      const response = await fetch(`${API_URL}/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      })
      if (!response.ok) throw new Error("Failed to add todo")
      const newTodo = await response.json()
      setTodos([newTodo, ...todos])
    } catch (err) {
      setError(err.message)
      console.error("Error adding todo:", err)
    }
  }

  // Toggle todo status
  const handleToggleTodo = async (id, currentStatus) => {
    try {
      const newStatus = currentStatus === "todo" ? "done" : "todo"
      const response = await fetch(`${API_URL}/todos/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      })
      if (!response.ok) throw new Error("Failed to update todo")
      const updatedTodo = await response.json()
      setTodos(todos.map((t) => (t._id === id ? updatedTodo : t)))
    } catch (err) {
      setError(err.message)
      console.error("Error updating todo:", err)
    }
  }

  // Delete todo
  const handleDeleteTodo = async (id) => {
    try {
      const response = await fetch(`${API_URL}/todos/${id}`, {
        method: "DELETE",
      })
      if (!response.ok) throw new Error("Failed to delete todo")
      setTodos(todos.filter((t) => t._id !== id))
    } catch (err) {
      setError(err.message)
      console.error("Error deleting todo:", err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Tasks</h1>
          <p className="text-gray-600">Stay organized and productive</p>
        </div>

        {/* Error Message */}
        {error && <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">{error}</div>}

        {/* Add Todo Form */}
        <AddTodoForm onAddTodo={handleAddTodo} />

        {/* Todo List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin">
              <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full"></div>
            </div>
            <p className="text-gray-600 mt-4">Loading tasks...</p>
          </div>
        ) : (
          <TodoList todos={todos} onToggleTodo={handleToggleTodo} onDeleteTodo={handleDeleteTodo} />
        )}

        {/* Empty State */}
        {!loading && todos.length === 0 && (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No tasks yet</h3>
            <p className="text-gray-600">Create your first task to get started</p>
          </div>
        )}
      </div>
    </div>
  )
}
