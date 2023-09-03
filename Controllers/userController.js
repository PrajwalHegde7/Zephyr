const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");

const register = async (req, res) => {
    const { name, email, password, role, securityQuestion, securityQuestionAnswer } =
        req.body;
    const checkUser = await User.findOne({ email });
    if (checkUser) {
        console.log("duplicate");
        res.sendFile(
            __dirname.split(path.sep).slice(0, -1).join(path.sep) +
                "\\Pages\\duplicate.html"
        );
    }else if(!name || !email||!password||!role||!securityQuestion||!securityQuestionAnswer){
        console.log("All details are necessary");
        res.sendFile(
            __dirname.split(path.sep).slice(0, -1).join(path.sep) +
                "\\Pages\\all_fields.html"
        );
    } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
            securityQuestion,
            securityQuestionAnswer,
        });
        console.log("user created" + newUser);
        res.sendFile(
            __dirname.split(path.sep).slice(0, -1).join(path.sep) +
                "\\Pages\\login.html"
        );
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.send("Enter all the details");
    } else {
        const user = await User.findOne({email});
        if (user && email === user.email && await bcrypt.compare(password,user.password)) {
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

module.exports = { register, login, profile };
