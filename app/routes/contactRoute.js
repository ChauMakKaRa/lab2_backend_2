const express= require('express');
const contacts = require('../controllers/contactController');

const router = express.Router();

router.route('/')
    .post(contacts.create)
    .get(contacts.findAll)
    .delete(contacts.delete);

router.route('/favorite')
    .post(contacts.findFavorite);

router.route('/:id')
    .post(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.deleteAll);

module.exports = router;