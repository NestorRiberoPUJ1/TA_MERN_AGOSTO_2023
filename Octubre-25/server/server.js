const express = require("express");
const app = express();
const port = 8000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const userRoutes = require("./Routes/user.routes");
app.use("/api/user", userRoutes);

const companyRoutes = require("./Routes/company.routes");
app.use("/api/company", companyRoutes);

app.listen(port, () => console.log(`Listening on port: ${port}`));