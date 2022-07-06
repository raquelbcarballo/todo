var express = require('express');
var router = express.Router();


router.get("/", (req, res, next) => {
    res.json(["Hola"]);
});

module.exports = router;