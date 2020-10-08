
const apiRoutes = require('./apis/api');

// initialize route starting point
function init(app) {
    app.get('/', (req, res) => {
        res.send({ welcome: 'Welcome to Athenaeum! The one stop shop for information on your personal library!' })
    });

    // create the starting point of routes
    app.use('/athenaeum', apiRoutes);
}

module.exports = {
    init: init
};
