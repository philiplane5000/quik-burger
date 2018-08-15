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
    selectAll: function (table, cb) {
        let queryStr = "SELECT * FROM " + table + ";";
        connection.query(queryStr, function (err, results) {
            if (err) {
                throw err;
            }
            cb(results);
        });
    },
    //WILL REWRITE THESE USING INTERPOLATION LATER:
    insertOne: function (table, newObj, cb) {
        let queryStr = `INSERT INTO ${table} SET ?`
        console.log(queryStr);

        connection.query(queryStr, newObj, function (err, results) {
            if (err) {
                throw err;
            }
            cb(results);
            // console.log(result);
        })
    },
    updateOne: function (table, id, cb) {
        console.log('UPDATE-ONE FUNCTION CALLED WITHIN ORM.JS');

        connection.query(`UPDATE ${table} SET devoured = true WHERE id = ?`, id, function (error, results, fields) {
            if (error) throw error;
            cb(results)
          });
    }
}

//EXPORTED TO MODEL -- BURGER.JS
module.exports = orm;