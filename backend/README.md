# Santosh Jaiswal Provision Backend API

This is a Node.js REST API for user authentication (login, registration) using Express, MongoDB, JWT, and bcrypt.

## Features
- User registration
- User login (JWT authentication)
- Protected route example

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- cors

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file with your MongoDB URI and JWT secret:
   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```
3. Start the server:
   ```bash
   npm start
   ```

## Endpoints
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and receive a JWT
- `GET /api/protected` — Example protected route (requires JWT)

---
Replace placeholder values in `.env` with your actual credentials.
