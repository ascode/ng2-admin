//const http = require('http');
var express = require('express');
var app = express();
var demoRouter = require('./demoRouter');

app.use('/api', demoRouter);

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});