# Todo App - Deployment Guide

## Backend Deployment (Express + MongoDB)

### Option 1: Deploy to Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to backend folder: `cd backend`
3. Create `vercel.json`:
\`\`\`json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ]
}
\`\`\`
4. Set environment variables in Vercel dashboard:
   - `MONGODB_URI`: Your MongoDB connection string
   - `FRONTEND_URL`: Your frontend URL
5. Deploy: `vercel`

### Option 2: Deploy to Heroku
1. Install Heroku CLI
2. Create Procfile in backend folder: `web: node server.js`
3. `heroku create your-app-name`
4. Set env vars: `heroku config:set MONGODB_URI=your_mongodb_uri`
5. `git push heroku main`

### Option 3: Deploy to Railway
1. Connect your GitHub repo to Railway
2. Add MongoDB addon
3. Set environment variables
4. Deploy

## Frontend Deployment (React + Vite)

### Deploy to Vercel
1. Navigate to frontend folder: `cd frontend`
2. `vercel`
3. Set `VITE_API_URL` environment variable to your backend URL

### Deploy to Netlify
1. Build: `npm run build`
2. Connect your GitHub repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Set environment variables

## MongoDB Setup

1. Create a free cluster at mongodb.com
2. Get connection string
3. Add to backend `.env` file as `MONGODB_URI`

## Local Development

### Backend
\`\`\`bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI
npm run dev
\`\`\`

### Frontend
\`\`\`bash
cd frontend
npm install
cp .env.example .env
npm run dev
\`\`\`

Visit http://localhost:3000

## Environment Variables

### Backend (.env)
- `MONGODB_URI`: MongoDB connection string
- `PORT`: Server port (default: 5000)
- `FRONTEND_URL`: Frontend URL for CORS

### Frontend (.env)
- `VITE_API_URL`: Backend API URL (default: http://localhost:5000/api)
