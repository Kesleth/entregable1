const express = require("express");
const cors = require("cors");

//routes

const userRoutes = require("./routes/users.routes");
const repairRoutes = require("./routes/repairs.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/repairs", repairRoutes);

module.exports = app;
