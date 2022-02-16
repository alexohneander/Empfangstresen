var router = require('express').Router();

router.get('/', function(req, res, next) {
    return res.json({ test: "test" });
});

router.get('/register', function(req, res, next) {
    return res.json({ status: "ok" });
});

module.exports = router;