const express = require('express');
const rlRoutes = require('./reading_list/rl.route');
const libRoutes = require('./libr/library.route')

const router = express.Router();
router.get('/', (req, res) => {
    res.send({ message: "Here's your books and reading lists!" });
})

// create branched off routes
router.use('/library', libRoutes);
router.use('/reading_list', rlRoutes);

module.exports = router;