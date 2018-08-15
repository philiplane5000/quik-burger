const connection = require("../config/connection");

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
    insertOne: function (table, newObj, cb) {
        let queryStr = `INSERT INTO ${table} SET ?`
        console.log(queryStr);

        connection.query(queryStr, newObj, function (err, results) {
            if (err) {
                throw err;
            }
            cb(results);
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

module.exports = orm;