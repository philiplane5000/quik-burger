const orm = require("../config/orm");

let burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insert: function (newObj, cb) {
        orm.insertOne("burgers", newObj, function (res) {
            cb(res);
        });
    },
    update: function (burgerID, cb) {
        orm.updateOne("burgers", burgerID, function (res) {
            cb(res);
        });
    }
}

module.exports = burger;
