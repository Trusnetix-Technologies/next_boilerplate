const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const port = 5001;

const app = express();

mongoose.connect(process.env.MONGO_URI, {}).then(() => {
  console.log("Connected to MongoDB succesfully. Double Yay!");
});

require("./routes/postRoutes")(app);

app.listen(port, () => {
  console.log("Server is running. Yay!");
});
