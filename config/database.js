const {
  DB_USER = "csrmarxpaquubt",
  DB_PASSWORD = "de6e0d0ea4b15f83a2c969d5dc920feee7c912b5efe10871b8dea3658515a7cb",
  DB_NAME = "d93akmbt13sk2h",
  DB_HOST = "ec2-52-3-2-245.compute-1.amazonaws.com",
  DB_PORT = "5432",
} = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_development`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres"
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_test`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres"
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}_production`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: "postgres"
  }
}
