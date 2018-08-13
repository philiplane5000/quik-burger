const express = require("express");
//IMPORTING BURGER TO ACCESS ALL DATABASE SPECIFIC FUNCTIONS
const burger = require("../models/burger");
const router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {
        let dataObj = {
            burgers: data
        };
        console.log(dataObj);
        res.render("index", dataObj);
    });
});

router.post("/add/burger", function (req, res) {
    res.send("CREATE BURGER UNDER CONSTRUCTION");
});

router.put("/update/burger", function (req, res) {
    res.send("UPDATE BURGER UNDER CONSTRUCTION");
});

module.exports = router;
