const knex = require('../db/knex');

const libraryController = {
    
    // createBook(req, res) {
    //     knex('todo')
    //         .insert({ 
    //             book: req.body.book,
    //             is_done: req.body.is_done 
    //         })
    //         .returning('id')
    //         .then((bookId) => {
    //             res.json({
    //                 success: true, 
    //                 bookId: bookId,
    //                 message: 'Book has been created!'
    //             })
    //         })
    //         .catch((err) => {
    //             console.log("error: " + err);
    //             res.status(400).json({
    //                 success: false, 
    //                 dbError: 'db error'
    //             })
    //         });
    // },


    findAllBooks(req, res) { 
        knex.select('*').from('book')
            .then(books => {
                if(books.length){
                    res.json({
                        dataExists: true,
                        books: books
                    })
                } else {
                    res.json({
                        dataExists: false
                    })
                }

                // TODO will make nested calls for authors, genres, & series
            })
            .catch(err => res.status(400).json({
                success: false, 
                dbError: 'db error: unable to find books'
            }))
    },


    findBook(req, res) {
        knex('book')
            .where({id: req.params.id})
            .then(book => {
                res.json({
                    success: true,
                    book: book
                })
            })
            .catch(err => res.status(400).json({
                success: false, 
                dbError: 'db error: unable to find book'
            }))
    },


    // updateBook(req, res) {
    //     let bookId = req.params.id; 
    //     let book = req.body.book;
    //     let isDone = req.body.is_done;
        
    //     knex('todo')
    //         .where('id', '=', bookId)
    //         .update({ 
    //             book: book,
    //             is_done: isDone 
    //         })
    //         .then( () => {
    //             res.json({
    //                 success: true,
    //                 message: 'Book updated!'
    //             })
    //         })
    //         .catch(err => res.status(400).json({
    //             success: false, 
    //             dbError: 'db error: unable to update book'
    //         }))
    // },


    // deleteBook(req, res) {
    //     knex('todo')
    //         .where('id', '=', req.params.id)
    //         .del()
    //         .then( () => {
    //             res.json({
    //                 success: true, 
    //                 message: 'Book has been deleted!'
    //             })
    //         })
    //         .catch(err => res.status(400).json({
    //             success: false, 
    //             dbError: 'db error: unable to delete book'
    //         }))
    // }

};

module.exports = libraryController;