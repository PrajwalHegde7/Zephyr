const path = require("path");
const jwt = require("jsonwebtoken");

const login = (req, res) => {
    const { email, pass } = req.body;
    if (!email || !pass) {
        res.send("Enter all the details");
    } else {
        if (email === "admin@zephyr.com" && pass === "admin") {
            const token = jwt.sign({ email }, "secret123secret", {
                expiresIn: "5m",
            });
            console.log(token);
            res.appendHeader("token", token);
            res.sendFile(
                __dirname.split(path.sep).slice(0, -1).join(path.sep) +
                    "\\Pages\\success.html"
            );
        } else {
            res.sendFile(
                __dirname.split(path.sep).slice(0, -1).join(path.sep) +
                    "\\Pages\\failure.html"
            );
        }
    }
};

const profile = (req, res) => {
    res.sendFile(
        __dirname.split(path.sep).slice(0, -1).join(path.sep) +
            "\\Pages\\user.html"
    );
};

module.exports = { login, profile };
