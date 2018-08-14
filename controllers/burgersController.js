const express = require("express");
//IMPORTING BURGER TO ACCESS ALL DATABASE SPECIFIC FUNCTIONS
const burger = require("../models/burger");
//ESTABLISH ROUTER (EXPRESS 4.0) AND EXPORT ROUTER FOR SERVER.JS
const router = express.Router();

router.get("/", function (req, res) {
    burger.all(function (data) {
        let hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    });
});

router.post("/add/burger", function (req, res) {
    console.log("NEW BURGER NAME= " + req.body.burger_name);
    res.send("CREATE BURGER UNDER CONSTRUCTION");
});

router.put("/update/burger", function (req, res) {
    res.send("UPDATE BURGER UNDER CONSTRUCTION");
});

module.exports = router;
