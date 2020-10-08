const knex = require('../db/knex');

const libraryController = {
    
    createItem(req, res) {
        knex('todo')
            .insert({ 
                item: req.body.item,
                is_done: req.body.is_done 
            })
            .returning('id')
            .then((itemId) => {
                res.json({
                    success: true, 
                    itemId: itemId,
                    message: 'Item has been created!'
                })
            })
            .catch((err) => {
                console.log("error: " + err);
                res.status(400).json({
                    success: false, 
                    dbError: 'db error'
                })
            });
    },


    findAllItems(req, res) { 
        knex.select('*').from('todo')
            .then(items => {
                if(items.length){
                    res.json({
                        dataExists: true,
                        items: items
                    })
                } else {
                    res.json({
                        dataExists: false
                    })
                }
            })
            .catch(err => res.status(400).json({
                success: false, 
                dbError: 'db error: unable to find items'
            }))
    },


    findItem(req, res) {
        knex('todo')
            .where({id: req.params.id})
            .then(item => {
                res.json({
                    success: true,
                    item: item
                })
            })
            .catch(err => res.status(400).json({
                success: false, 
                dbError: 'db error: unable to find item'
            }))
    },


    updateItem(req, res) {
        let itemId = req.params.id; 
        let item = req.body.item;
        let isDone = req.body.is_done;
        
        knex('todo')
            .where('id', '=', itemId)
            .update({ 
                item: item,
                is_done: isDone 
            })
            .then( () => {
                res.json({
                    success: true,
                    message: 'Item updated!'
                })
            })
            .catch(err => res.status(400).json({
                success: false, 
                dbError: 'db error: unable to update item'
            }))
    },


    deleteItem(req, res) {
        knex('todo')
            .where('id', '=', req.params.id)
            .del()
            .then( () => {
                res.json({
                    success: true, 
                    message: 'Item has been deleted!'
                })
            })
            .catch(err => res.status(400).json({
                success: false, 
                dbError: 'db error: unable to delete item'
            }))
    }

};

module.exports = libraryController;