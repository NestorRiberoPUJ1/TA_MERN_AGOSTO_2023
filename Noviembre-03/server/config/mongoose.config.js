const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://127.0.0.1/projectManager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("CONNECTED TO DB"))
    .catch(err => console.log("ERROR WITH DB: " + err))