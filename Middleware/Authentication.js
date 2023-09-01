const jwt = require("jsonwebtoken");
const path = require("path");

const Authenticate = (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, "secret123secret", (err, decoded) => {
            if (err) {
                console.log("fail");
                res.sendFile(
                    __dirname.split(path.sep).slice(0, -1).join(path.sep) +
                        "\\Pages\\auth_failure.html"
                );
            } else {
                console.log(decoded);
                next();
            }
        });
    } else {
        console.log("Token is missing");
        res.sendFile(
            __dirname.split(path.sep).slice(0, -1).join(path.sep) +
                "\\Pages\\auth_failure.html"
        );
    }
};

module.exports = Authenticate;
