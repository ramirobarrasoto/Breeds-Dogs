const { Router } = require('express');
const readAllTemperament = require('../Controllers/readAllTemperament');

const router = Router();

router.use('/', readAllTemperament);

module.exports = router;
