const express = require("express");
const router = express.Router();

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controller/UserController");

// 📥 GET all users
router.get("/users", getUsers);

// ➕ CREATE user
router.post("/users", createUser);

// ✏️ UPDATE user
router.put("/users/:id", updateUser);

// 🗑️ DELETE user
router.delete("/users/:id", deleteUser);

module.exports = router;