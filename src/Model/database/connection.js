const { Client } = require('pg');

const client = new Client({
    user: process.env.DB_USER,
    host: '127.0.0.1',
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.PORT,
  })
  client.connect(function(err) {
    if (err) throw err;
    console.log("Database connected!!!");
  });

  module.exports = client;