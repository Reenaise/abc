const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  port: "3308",
  user: "root",
  password: "",
  database: "todo_db",
});

module.exports = db;