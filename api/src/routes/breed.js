const { Router } = require('express');
const readAll = require('../Controllers/readAll');
const readAllById = require('../Controllers/readAllById');
const createBreed = require('../Controllers/createBreed');

const router = Router();

router.get('/', readAll);
router.get('/:id', readAllById);
 router.post('/', createBreed);
// router.delete('/:id', deleteBreed);
// router.put('/:id', updateBreed);

module.exports = router;
