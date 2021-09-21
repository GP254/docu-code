const express = require('express');
const router = express.Router();

router.use('/github', require('./github'));

module.exports = router;
