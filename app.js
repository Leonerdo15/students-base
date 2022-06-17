let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let studentsRouter = require('./routes/studentsRoutes');
let departmentsRouter = require('./routes/departementsRoutes');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/students', studentsRouter);
app.use('/api/departments', departmentsRouter);

module.exports = app;

