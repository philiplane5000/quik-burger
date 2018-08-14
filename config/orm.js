const connection = require("../config/connection");

//HELPER FUNCTIONS (not exported)
//*******************************/

function printQuestionMarks(num) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }
}

const orm = {
    selectAll: function(table, cb) {
        let queryStr = "SELECT * FROM " + table + ";";
        connection.query(queryStr, function(err, result) {
            if(err) {
                throw err;
            }
            cb(result);
        });
    },
    //WILL REWRITE THESE USING INTERPOLATION LATER:
    insertOne: function(table, columns, values, cb) {
        let queryStr = "INSERT INTO " + table;
        queryStr += " (";
        queryStr += cols.toString();
        queryStr += ") ";
        queryStr += "VALUES (";
        queryStr += printQuestionMarks(values.length);
        queryStr += ") "

        console.log(queryStr);

        connection.query(queryStr, vals, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        })
    },
    updateOne: function(table, objColVals, condition, cb) {
        console.log('UPDATEONE FUNCTION CALLED WITHIN ORM.JS');
    }
}

//EXPORTED TO MODEL -- BURGER.JS
module.exports = orm;