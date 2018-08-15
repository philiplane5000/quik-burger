const express = require("express");
const burger  = require("../models/burger");
const router  = express.Router();

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
    burger.insert(newBurg, function (result) {
        res.status(200);
        res.json({ id: result.id });
    });
});

router.put("/update/burger", function (req, res) {
    burger.update(req.body.id, function (result) {
        res.status(200);
        res.json({ id: result.id });
    })

});

module.exports = router;
