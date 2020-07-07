const bodyParser = require("body-parser");
const express = require("express");

const registerrouter = require("./routes/register");
const cookieParser = require("cookie-parser");
const app = express();
app.use(bodyParser.json());
//app.use(cors());
//app.use(cookieParser());
app.use("/register", registerrouter);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`System is listening on the port ${port}`);
});
require("./connection/key");
