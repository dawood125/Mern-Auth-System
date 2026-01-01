# 🔐 MERN Authentication System

A complete **MERN Stack Authentication System** featuring secure user registration, login, email verification using OTP, password reset functionality, and JWT-based authentication.  
This project is built to understand **real-world authentication flows** used in production applications.

---

## 🚀 Features

- User Registration & Login
- Email Verification using 6-digit OTP
- Forgot Password & Reset Password
- JWT (JSON Web Token) Authentication
- Protected Routes
- Secure Password Hashing
- Token-based Authorization
- Clean MVC backend architecture

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Nodemailer
- bcrypt

---

## 📂 Project Structure

mern-auth-system/
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── utils/
│ └── server.js
│
├── frontend/
│ ├── src/
│ ├── components/
│ ├── pages/
│ └── App.jsx
│
└── README.md


---

## 🔑 Authentication Flow

1. User registers with email and password
2. OTP is sent to the user's email for verification
3. User verifies email using OTP
4. User can log in and receive JWT token
5. Protected routes are accessed using JWT
6. Password reset is handled securely via email OTP

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/dawood125/Mern-Auth
cd mern-auth-system

2️⃣ Backend Setup

cd backend
npm install

Create a .env file in the backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_password

Run backend:
npm run dev

cd frontend
npm install
npm run dev
```

🧪 Learning Objectives

Understand real-world authentication logic

Implement secure password handling

Learn JWT-based authentication

Work with protected APIs

Practice MERN stack integration

Improve backend architecture skills

🙌 Credits

This project is inspired by GreatStack MERN Authentication tutorial and modified for learning and practice purposes.

📫 Contact

Dawood Ahmed

GitHub: https://github.com/dawood125


⭐ Support

If you find this project helpful, feel free to ⭐ the repository.