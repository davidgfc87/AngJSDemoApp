var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');
var port = 8000;
app.use(express.static(rootPath + '/app'));
app.listen(port);
console.log(`Now listening on port ${port}`);
