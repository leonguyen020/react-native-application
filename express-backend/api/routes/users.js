const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const UsersController = require('../controllers/users');

router.post("/signup", UsersController.post_new_user);

router.post("/login", UsersController.post_login);

router.delete("/:userId", );

module.exports = router;