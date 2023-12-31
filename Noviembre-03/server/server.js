require('dotenv/config');
const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

app.use(
    cors({
        credentials: true,
        origin: ["http://192.168.1.7:3000", "http://localhost:3000"]
    })
)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//DB init
require("./config/mongoose.config");

const sessionRoutes = require("./routes/session.routes");
app.use("/api/session", sessionRoutes);

const userRoutes = require("./routes/user.routes");
app.use("/api/user", userRoutes);

const projectRoutes = require("./routes/project.routes");
app.use("/api/project", projectRoutes);




app.listen(port, () => console.log(`Listening on port: ${port}`));