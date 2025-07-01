# 🤖 AI Chatbot – Full Stack (React + Express)

This is a full-stack chatbot application powered by **React (Vite)** on the frontend and **Express.js** on the backend. Users can send messages, and the backend responds just like you're chatting with a bot!

---

## 🧩 Tech Stack

| Layer      | Tech Stack                                    |
|------------|-----------------------------------------------|
| Frontend   | React + Vite + TypeScript + Tailwind CSS      |
| Backend    | Node.js + Express                             |
| Deployment | Render (backend), Vercel (frontend)           |

---

## ⚠️ Notice About Live Demo

> 🚨 **Heads up!** The backend is hosted on Render's free tier, which can hit **API quota limits** or **sleep after 15 minutes of inactivity**.

If the chatbot doesn’t respond:

- 💤 It might be waking up — wait a few seconds and try again
- 🔁 Or the **daily API usage limit** has been reached

---

## 💡 What You Can Do

You can **clone this repo and run the project locally**:

```bash
# Clone the repository
git clone https://github.com/nianod/Express-Ai-Chatbot
cd Express-Ai-Chatbot


# Fronted Setup

# Create .env in /client
VITE_BACKEND_URL=https://express-ai-chatbot.onrender.com

npm install    # Install frontend dependencies
npm run dev    # Start frontend locally


# Fronted Setup


cd server  # Navigate to backend folder

# Create .env file in /server
OPENAI_API_KEY=your-openai-api-key-here

npm install   # Install backend dependencies
node index.js # Start backend
