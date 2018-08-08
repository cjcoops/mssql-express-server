const sql = require("mssql");

const dbConfig = {
  user: "sa",
  password: "reallyStrongPwd123",
  server: "localhost",
  database: "SampleDB"
};

(async () => {
  try {
    await sql.connect(dbConfig);
    const result = await sql.query`select 42, 'hello world'`;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
})();
