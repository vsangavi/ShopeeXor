const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");
const mongoose = require("mongoose");
const { Registerget, Registerpost } = require("../controllers/registercontroller");
router.get("/", Registerget);
router.post("/",Registerpost);
module.exports = router;
