if (process.env.NODE_ENV == "development") {
  require("dotenv").config();
}

const express = require('express');
const bodyParser = require('body-parser');
// const db = require('./utils/db');
const routes = require('./routes/routes');

const app = express();
app.use('/', routes);

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })) 

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", `POST ,GET ,OPTIONS, PUT, PATCH, DELETE`);
  res.setHeader("Access-Control-Allow-Headers", `Content-Type , Authorization ,Cache-Control, multipart/form-data , application/json ,text/plain, text/html`);
  if (req.method == "OPTIONS") {
    return res.status(200);
  }
  next();
});



const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`started server on port ${PORT}`));