# 👤 User API (Day04 Backend)

This is a simple RESTful API for managing users using **Node.js**, **Express**, and **MongoDB**. The API includes routes to create, read, update, and delete users. Tested with **Postman**.

---

## 📁 Project Structure

```
Day04/
├── backend/
│   ├── config/
│   │   └── db.js               # MongoDB connection setup
│   ├── controller/
│   │   └── userController.js   # Business logic for user operations
│   ├── model/
│   │   └── userModal.js        # Mongoose user schema
│   ├── routes/
│   │   └── userRoute.js        # API routes
│   ├── node_modules/
│   ├── .env                    # Environment variables
│   ├── package.json
│   ├── package-lock.json
│   └── server.js               # Entry point of the application
```





## 📬 API Endpoints

| Method | Route            | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/users`     | Get all users     |
| POST   | `/api/users`     | Create a new user |
| GET    | `/api/users/:id` | Get user by ID    |
| PUT    | `/api/users/:id` | Update user by ID |
| DELETE | `/api/users/:id` | Delete user by ID |

> Replace `:id` with the actual user ID.

---

## 🔗 Tools & Technologies

* Node.js
* Express.js
* MongoDB
* Mongoose
* Postman (for testing)

---

## ✅ How to Test

Use **Postman** to test the API:

1. Make sure the server is running
2. Use the API routes above to test user CRUD operations

