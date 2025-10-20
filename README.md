# Todo App - Full Stack

A modern, full-stack Todo application built with Express.js, React, MongoDB, and TailwindCSS.

## Features

- ✨ Create, read, update, and delete todos
- ✅ Mark todos as complete/incomplete
- 📝 Add descriptions to todos
- 🎨 Modern, engaging UI with smooth animations
- 📱 Fully responsive design
- 🚀 Production-ready backend and frontend

## Tech Stack

### Backend
- Node.js + Express.js
- MongoDB + Mongoose
- CORS enabled
- RESTful API

### Frontend
- React 18
- Vite
- TailwindCSS
- Fetch API

## Project Structure

\`\`\`
todo-app/
├── backend/
│   ├── models/
│   │   └── Todo.js
│   ├── routes/
│   │   └── todos.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── AddTodoForm.jsx
│   │   │   ├── TodoList.jsx
│   │   │   └── TodoItem.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── package.json
│   └── .env.example
├── DEPLOYMENT.md
└── README.md
\`\`\`

## API Endpoints

- `GET /api/todos` - Get all todos
- `GET /api/todos/:id` - Get single todo
- `POST /api/todos` - Create new todo
- `PATCH /api/todos/:id` - Update todo
- `DELETE /api/todos/:id` - Delete todo

## Quick Start

See DEPLOYMENT.md for detailed setup and deployment instructions.

### Local Development

1. **Backend Setup**
   \`\`\`bash
   cd backend
   npm install
   cp .env.example .env
   # Edit .env with your MongoDB URI
   npm run dev
   \`\`\`

2. **Frontend Setup** (in new terminal)
   \`\`\`bash
   cd frontend
   npm install
   npm run dev
   \`\`\`

3. Open http://localhost:3000

## Deployment

See DEPLOYMENT.md for comprehensive deployment guides for:
- Vercel (recommended)
- Heroku
- Railway
- Netlify

## License

MIT
