const orm = require("../config/orm");

//CREATE THE CODE THAT WILL CALL THE ORM FUNCTIONS USING BURGER SPECIFIC INPUT FOR THE ORM
let burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insert: function (cb) {
        // orm.insertOne()
        cb();
    },
    update: function (cb) {
        cb()
    }

}

module.exports = burger;
//EXPORT AT THE END OF FILE FOR -- burgersController.js