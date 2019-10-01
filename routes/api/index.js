const router = require('express').Router();
const bookshelfRoutes = require('./bookshelf');

router.use('/api/books', bookshelfRoutes);

module.exports = router;