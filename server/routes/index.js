let express = require('express');
let router = express.Router();


router.get("/", (req, res, next) => {
    res.json(["Hola"]);
});

module.exports = router;