var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

// Routers
var bikesRouter = require('./src/routes/bikes');
var shopsRouter = require('./src/routes/shops');
var availabilityRouter = require('./src/routes/availability');
var categoriesRouter = require('./src/routes/category');

var app = express();

// Setup to serve static files (relative from directory where node is launched)
app.use('/static', express.static(path.join(__dirname, 'public')));

// CORS
var cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Entrypoint for each router
app.use('/bikes', bikesRouter);
app.use('/shops', shopsRouter);
app.use('/availability', availabilityRouter);
app.use('/categories', categoriesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
