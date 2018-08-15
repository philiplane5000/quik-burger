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

    let newBurg = {
        burger_name: req.body.burger_name,
        devoured: false
    }
    burger.insert(newBurg, function(result) {
        res.status(200);
        res.json({ id: result.id });
    });
    // res.status(200).send("SUCCESS");

});

router.put("/update/burger", function (req, res) {
    console.log("DEVOUR BURGER WITH ID: " + req.body.id);
    burger.update(req.body.id, function(result) {
        res.status(200);
        res.json({ id: result.id});
    })

});

module.exports = router;
