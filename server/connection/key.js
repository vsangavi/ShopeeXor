const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Mongodb conected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
