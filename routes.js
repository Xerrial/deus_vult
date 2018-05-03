const passport = require('passport');

module.exports = (app) => {

    app.use(function(req, res, next) {
        console.log(req.url);
        next();
    });
    
    // app.get('/', (req, res) => {
    //     res.send('I\' working lol');
    // });


};