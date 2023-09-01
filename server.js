const express = require("express");
const app = express();
const path = require("path");
const users = require("./Routes/users");
const profile = require("./Routes/profile");

app.use(express.urlencoded());


app.get("/", (req, res) => {
    console.log(" server is responding as expexted _");
    res.sendFile(path.join(__dirname, "index.html"));
});

app.use("/users", users);
app.use("/profile", profile);

app.listen(3000, () => {
    console.log(" connected to server on port 3000");
});
