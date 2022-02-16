var router = require('express').Router();

router.get('/', function(req, res, next) {

    var status = {
        status: "ok",
        version: "1.0.0"
    };

    return res.json({ status: status });
});

module.exports = router;