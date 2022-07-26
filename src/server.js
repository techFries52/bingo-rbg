const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/rbg-bingo'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/rbg-bingo/index.html'));});
app.listen(process.env.PORT || 4200);