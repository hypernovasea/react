const router = require('express').Router();
const libraryController = require("../../../controllers/libr.controller");

router.get('/', (req, res) => {
    res.send({ message: "Here are your books !" });
});

router.get('/all', libraryController.findAllBooks);
router.get('/:id', libraryController.findBook);
// router.post('/', libraryController.createBook);
// router.put('/:id', libraryController.updateBook); 
// router.delete('/:id', libraryController.deleteBook); 

module.exports = router;
