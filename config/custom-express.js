var express = require('express');
var cors = require('cors');
var axios = require('axios');

var app = express();

app.use(cors());

module.exports = function(){
    return app;
}