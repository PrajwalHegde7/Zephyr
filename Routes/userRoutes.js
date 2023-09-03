const express = require("express");
const path = require("path");
const Authenticate = require("../Middleware/Authentication");
const { login, profile, register } = require("../Controllers/userController");
const router = express.Router();

router.get("/login", (req, res) => {
    res.sendFile(
        __dirname.split(path.sep).slice(0, -1).join(path.sep) + "\\Pages\\login.html"
    );
});
router.get("/register", (req, res) => {
    res.sendFile(
        __dirname.split(path.sep).slice(0, -1).join(path.sep) + "\\Pages\\signup.html"
    );
});

router.post("/register", register);
router.post("/login", login);
router.post("/profiledata", Authenticate, profile);

module.exports = router;
