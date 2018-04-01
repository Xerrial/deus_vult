const passport = require('passport');

module.exports = (app) => {


    app.get('/', (req, res) => {
        res.send('I\' working lol');
    });


};