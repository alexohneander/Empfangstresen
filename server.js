const app = require('./src/app');

// finally, let's start our server...
var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port ' + server.address().port);
});