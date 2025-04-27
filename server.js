const express = require('express');
const cors = require('cors');
require("dotenv").config()
const app = express();
const port = 3000;
const router = require('./src/routers/index');
const connection = require('./src/Model/database/connection');
// const tables = require('./Model/database/tables');

app.use(cors());

router(app, express);

app.listen(port, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("App listening on port " + port);
});

