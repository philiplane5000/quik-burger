const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Jeffabrick-3",
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) throw err;
    else {
        console.log('connected using id: ' + connection.threadId);
    }
})

module.exports = connection;