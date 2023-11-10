const express = require("express");
const app = express();
const port = 8000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//DB init
require("./config/mongoose.config");

const jokeRoutes = require("./routes/jokes.routes");
app.use("/api/joke", jokeRoutes);






app.listen(port, () => console.log(`Listening on port: ${port}`));