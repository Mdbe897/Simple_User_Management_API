# 🚀 User Management API (MVC - MERN Backend)

A beginner-friendly **User Management CRUD API** built with:

* Node.js
* Express.js
* MongoDB (Mongoose)
* MVC Architecture

---

# 📁 Project Structure

```
users/
├── controller/
│   └── UserController.js
├── model/
│   └── User.js
├── router/
│   └── userRouter.js
├── config/
│   └── db.js
├── app.js
├── .env
├── .gitignore
```

---

# ⚙️ Prerequisites

Make sure you have installed:

* Node.js
* npm (comes with Node)
* MongoDB Atlas account (or local MongoDB)
* Postman (for testing)

---

# 📥 1. Clone the Project

```bash
git clone https://github.com/Mdbe897/Simple_User_Management_API.git
cd users
```

---

# 📦 2. Install Dependencies

```bash
npm install
```

This will install:

* express
* mongoose
* dotenv

---

# 🔐 3. Setup Environment Variables

Create a `.env` file in the root folder:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

👉 Example:

```
PORT=3000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/usersDB
```

---

# 🔌 4. Connect to Database

Make sure your `config/db.js` looks like this:

```js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
```

---

# ▶️ 5. Run the Server

```bash
npm start
```

OR (if using nodemon):

```bash
npm run dev
```

You should see:

```
Server running on port 3000
MongoDB connected
```

---

# 🌐 Base URL

```
http://localhost:3000/api
```

---

# 🧪 Testing with Postman

---

## ➕ 1. Create User

**Method:** POST
**URL:**

```
http://localhost:3000/api/users
```

**Body → JSON:**

```json
{
  "fullName": "Ahmed Benali",
  "email": "ahmed@test.com",
  "phone": "0612345678",
  "address": "Agadir, Morocco",
  "status": "Active"
}
```

---

## 📥 2. Get All Users

**Method:** GET

```
http://localhost:3000/api/users
```

---

## ✏️ 3. Update User

**Method:** PUT

```
http://localhost:3000/api/users/:id
```

👉 Replace `:id` with the real user ID from database

Example:

```
http://localhost:3000/api/users/64f123abc456
```

---

## 🗑️ 4. Delete User

**Method:** DELETE

```
http://localhost:3000/api/users/:id
```

---

# ⚠️ Common Errors (Fix Guide)

### ❌ MongoDB connection error

* Check your `MONGO_URI`
* Make sure your IP is allowed in MongoDB Atlas

### ❌ Port already in use

* Change PORT in `.env`

### ❌ Cannot find module

```bash
npm install
```

---

# 🧠 What You Learned

* MVC Architecture (Model - Controller - Router)
* REST API (CRUD operations)
* MongoDB with Mongoose
* Environment variables
* Testing APIs with Postman

---

# 🚀 Next Steps (Upgrade Your Project)

You can improve this project by adding:

### 🔐 Authentication System

* Register & Login
* Password hashing (bcrypt)
* JWT authentication

### 🎨 Frontend (React)

* Build dashboard UI
* Connect API with Axios

---

# 👨‍💻 Author

Mohamed

---

# ⭐ If you like this project

Give it a ⭐ on GitHub!
