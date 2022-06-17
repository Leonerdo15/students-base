var express = require('express');
var router = express.Router();
var mStuds = require("../models/studentsModel");

/* GET all students */
router.get('/', async function(req, res, next) {
   let students = await mStuds.getAllStudents();
   res.send(students);
});

module.exports = router;
