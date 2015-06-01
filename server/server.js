var express = require('express'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    sessions = require('./routes/sessions'),
    positions = require('./routes/positions'),
    mypositions = require("./routes/mypositions"),
    categories = require("./routes/categories"),

    app = express();

app.use(bodyParser());          // pull information from html in POST
app.use(methodOverride());      // simulate DELETE and PUT

app.use(express.static('../lg/www'));

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/sessions', sessions.findAll);
app.get('/sessions/:id', sessions.findById);

app.get('/positions', positions.findAll);
app.get('/positions/:id', positions.findById);

app.get('/mypositions', mypositions.findAll);
app.get('/mypositions/:id', mypositions.findById);

app.get('/categories', categories.findAll);
app.get('/categories/:id', categories.findById);

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
