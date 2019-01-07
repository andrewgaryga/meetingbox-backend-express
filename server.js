const express = require('express');
const bodyParser = require('body-parser');
const personal = require('./routes/personal');
const meetings = require('./routes/meetings');
const departments = require('./routes/departments')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  // Website you wish to allow to connect, e.g. http://localhost:3000
  res.header("Access-Control-Allow-Origin", "*");
  // Request methods you wish to allow
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.header('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});

app.use('/personal', personal);
app.use('/meetings', meetings);
app.use('/departments', departments);

const port = 8000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
