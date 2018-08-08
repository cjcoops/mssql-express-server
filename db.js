const sql = require("mssql");

const dbConfig = {
  user: "sa",
  password: "reallyStrongPwd123",
  server: "localhost",
  database: "SampleDB"
};

module.exports = function(query, callback) {
  sql.connect(
    dbConfig,
    err => {
      if (err) {
        console.log("Error while connecting database :- " + err);
        callback(err, null);
      } else {
        var request = new sql.Request();
        request.query(query, (err, res) => {
          if (err) {
            console.log("Error while querying database :- " + err);
            callback(err, null);
          } else {
            callback(null, res);
          }
        });
      }
    }
  );
};
