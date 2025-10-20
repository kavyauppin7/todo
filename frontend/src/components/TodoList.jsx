"use client"

import TodoItem from "./TodoItem"

export default function TodoList({ todos, onToggleTodo, onDeleteTodo }) {
  const completedCount = todos.filter((t) => t.status === "done").length

  return (
    <div>
      {/* Progress Bar */}
      {todos.length > 0 && (
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm text-gray-600">
              {completedCount} of {todos.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-black h-2 rounded-full transition-all duration-300"
              style={{ width: `${(completedCount / todos.length) * 100}%` }}
            ></div>
          </div>
        </div>
      )}

      {/* Todo Items */}
      <div className="space-y-3">
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onToggle={() => onToggleTodo(todo._id, todo.status)}
            onDelete={() => onDeleteTodo(todo._id)}
          />
        ))}
      </div>
    </div>
  )
}
