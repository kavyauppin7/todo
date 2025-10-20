"use client"

import { useState } from "react"

export default function AddTodoForm({ onAddTodo }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [isExpanded, setIsExpanded] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim()) {
      onAddTodo(title, description)
      setTitle("")
      setDescription("")
      setIsExpanded(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="card">
        <input
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onFocus={() => setIsExpanded(true)}
          className="input-field mb-0 placeholder-gray-400"
        />

        {isExpanded && (
          <div className="mt-4 space-y-4 animate-in fade-in duration-200">
            <textarea
              placeholder="Add a description (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input-field resize-none h-24 placeholder-gray-400"
            />

            <div className="flex gap-3 justify-end">
              <button
                type="button"
                onClick={() => {
                  setIsExpanded(false)
                  setTitle("")
                  setDescription("")
                }}
                className="btn-secondary"
              >
                Cancel
              </button>
              <button type="submit" className="btn-primary">
                Add Task
              </button>
            </div>
          </div>
        )}
      </div>
    </form>
  )
}
