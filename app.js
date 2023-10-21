const path = require('path');
const express = require('express');
const cors = require('cors');
const ApiError = require("./app/api-error");
const contactsRouter = require('./app/routes/contactRoute');
const app = express();
const bodyParser = require('body-parser');

app.use(cors()) ;
app.use(express.json());

app.get('/', function (req, res) {
  res.json({message: " Welcome to contact book applications!!"});
})

app.use('/api/contacts', contactsRouter);
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  return next(new ApiError(404, "Resource not found"));
  });

app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;
