# User Management System

A full-stack MERN (MongoDB, Express, React, Node.js) application for managing users. Features a modern, responsive UI with search functionality and user detail views.

---

## 📸 Screenshots

![User Management Dashboard](screenshot.png)

---

## 🛠️ Tech Stack

**Frontend:**
- React (Vite)
- Axios for API calls
- CSS3 with modern design
- Inter font family

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- dotenv for environment variables
- CORS enabled

---

## 📁 Project Structure


User-Management/
├── backend/
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ └── userController.js
│ ├── models/
│ │ └── usersModel.js
│ ├── routes/
│ │ └── userRoute.js
│ ├── .env
│ ├── server.js
│ └── package.json
├── frontend/
│ ├── src/
│ │ ├── api/
│ │ │ ├── index.js
│ │ │ └── user.js
│ │ ├── components/
│ │ │ └── GetUsers/
│ │ │ ├── GetUsers.jsx
│ │ │ ├── GetUsers.css
│ │ │ └── index.jsx
│ │ ├── utils/
│ │ │ ├── index.js
│ │ │ └── getUsers.js
│ │ ├── App.jsx
│ │ ├── App.css
│ │ ├── index.css
│ │ └── main.jsx
│ ├── index.html
│ ├── vite.config.js
│ └── package.json
└── README.md

## 🚀 Features

- 📋 Display all users in card layout
- 🔍 Search users by name, email, or username
- 👤 View detailed user information in modal
- 👑 Admin badge for admin users
- 🔄 Real-time refresh
- 📱 Fully responsive design
- ⚡ Loading states and error handling
- 🎨 Clean, modern UI

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

1. **[Node.js](https://nodejs.org/)** (LTS version recommended)
2. **[MongoDB](https://www.mongodb.com/try/download/community)** (Community Server)
3. **[MongoDB Compass](https://www.mongodb.com/products/compass)** (Optional - for viewing data)
4. **[Git](https://git-scm.com/)** (For cloning the repository)

---

## 🔧 Installation & Setup

### 1. Clone the Repository


git clone https://github.com/janninobansag/User-Management.git
cd User-Management

2. Backend Setup

cd backend
npm install

Create a .env file in the backend folder with the following:

text
PORT=5000
MONGO_URL=mongodb://localhost:27017/mern_setup

3. Start MongoDB
Make sure MongoDB is running on your machine:

Windows: Check services.msc for "MongoDB Server" and ensure it's running

Or run mongod in a terminal

4. Import Sample Data (Optional but Recommended)
Open MongoDB Compass

Connect to mongodb://localhost:27017/

Create a database named mern_setup

Create a collection named users

Insert the following sample data:

[
  {
    "firstName": "Manish",
    "lastName": "Mandal",
    "userName": "Manntrix",
    "email": "admin@gmail.com",
    "password": "asdfg123",
    "isAdmin": true
  },
  {
    "firstName": "John",
    "lastName": "Doe",
    "userName": "Johndoe",
    "email": "johndoe@gmail.com",
    "password": "asdfg123"
  },
  {
    "firstName": "Demo",
    "lastName": "test",
    "userName": "Demo",
    "email": "demo@gmail.com",
    "password": "asdfg123"
  }
]

5. Start the Backend Server
npm start

6. Frontend Setup (Open a new terminal)
cd frontend
npm install
npm run dev
