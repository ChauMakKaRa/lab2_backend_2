const express= require('express');
const contacts = require('../controllers/controllers');

const router = express.Router();

router.route('/')
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.delete);

router.route('/favorite')
    .post(contacts.findFavorite);

router.route('/:id')
    .post(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.deleteAll);

module.exports = router;