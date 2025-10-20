"use client"

import { useState } from "react"

export default function TodoItem({ todo, onToggle, onDelete }) {
  const [isHovered, setIsHovered] = useState(false)
  const isCompleted = todo.status === "done"

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <div className="card group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="flex items-start gap-4">
        {/* Checkbox */}
        <button
          onClick={onToggle}
          className={`flex-shrink-0 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all mt-1 ${
            isCompleted ? "bg-black border-black" : "border-gray-300 hover:border-black"
          }`}
        >
          {isCompleted && (
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3
            className={`text-lg font-medium transition-all ${
              isCompleted ? "text-gray-400 line-through" : "text-gray-900"
            }`}
          >
            {todo.title}
          </h3>
          {todo.description && (
            <p className={`text-sm mt-1 transition-all ${isCompleted ? "text-gray-300" : "text-gray-600"}`}>
              {todo.description}
            </p>
          )}
          <p className="text-xs text-gray-400 mt-2">{formatDate(todo.createdAt)}</p>
        </div>

        {/* Delete Button */}
        {isHovered && (
          <button onClick={onDelete} className="btn-danger flex-shrink-0 animate-in fade-in duration-200">
            Delete
          </button>
        )}
      </div>
    </div>
  )
}
