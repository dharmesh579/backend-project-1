const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

// Import  Routes

const userRoute = require("./routes/user.routes");

// Routes middleware

app.use("/api/v1/users", userRoute);

module.exports = app;
