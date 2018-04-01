const express = require('express');
const app     = express();

const dbClient = require('./dbclient'); // Ссылка(!) на инстанс клиента БД

const settings = require('./settings');

dbClient.connect(settings.db.testurl, (err, db) => {
    if (err) {
        console.log(err);
        throw(err);
    } else 
        console.log('Connected to db');
});

require('./routes')(app); // Подключение путей

app.listen(settings.server.port, () => {
    console.log('Listening at port ' + settings.server.port);
});