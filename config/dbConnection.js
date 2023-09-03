const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const url = "mongodb+srv://prajwalhegde7:Prajwalsh%40123*@prajwalcluster.sutjnh0.mongodb.net/social-db";
        const connect = await mongoose.connect(url);
        console.log(
            "Database connected: ",
            connect.connection.host,
            connect.connection.name
        );
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDb;
