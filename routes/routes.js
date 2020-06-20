const router = require('express/index').Router();

const { postToSQL }= require('../controllers/db');

router.get('/', postToSQL)

module.exports = router;