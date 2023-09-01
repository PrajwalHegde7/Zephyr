const express = require("express");
const Authenticate = require("../Middleware/Authentication");
const { login, profile } = require("../Controllers/userController");
const router = express.Router();

router.post("/login", login);

router.post("/profiledata", Authenticate, profile);

module.exports = router;
