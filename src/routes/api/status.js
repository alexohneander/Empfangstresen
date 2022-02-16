var router = require('express').Router();

router.use('/', require('../../controllers/status'));

module.exports = router;