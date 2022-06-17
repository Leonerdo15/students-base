let express = require('express');
let router = express.Router();
let mDepartments = require("../models/departementsModel");

router.get('/', async function(req, res, next) {
    let dep = await mDepartments.getAllDepartements();
    res.send(dep);
});

module.exports = router;