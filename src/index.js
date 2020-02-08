const express = require('express');
const morgan = require('morgan');
const path = require('path');
const ejs = require('ejs');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(morgan('dev'));

// Routes
app.use(require('./routes/index'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Listening the Server
app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));
});