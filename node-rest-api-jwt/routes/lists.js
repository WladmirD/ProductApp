const express = require('express');
const router = express.Router();
const listController = require('../app/api/controllers/lists');
router.get('/', listController.getAll);
router.post('/', listController.create);
router.get('/:listId', listController.getById);
router.put('/:listId', listController.updateById);
router.delete('/:listId', listController.deleteById);
module.exports = router;