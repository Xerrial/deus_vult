const express = require('express');
const app     = express();
const dbClient = require('./dbclient'); // Ссылка(!) на инстанс клиента БД
const settings = require('./settings');

dbClient.connect(settings.db.testurl, (err, db, next) => {
    if (err) {
        console.log(err);
        throw(err);
    } else 
        console.log('Connected to db');
});

require('./routes')(app); // Подключение путей
var sitePath = process.argv[2] || ".";
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/game/index.html"); // главная страница
}); 

app.use('/', express.static(__dirname + '/game'));

console.log("Starting server in: " + __dirname + '/');
app.listen(settings.server.port, () => {
    console.log('Listening at port ' + settings.server.port);
});