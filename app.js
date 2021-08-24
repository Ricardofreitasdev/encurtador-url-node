var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);

  if( 404 === err.status  ){
      res.format({
          'text/plain': () => {
              res.send({message: 'not found Data'});
          },
          'text/html': () => {
              res.render('error');
          },
          'application/json': () => {
              res.json({message: 'Método não suportado'});
          },
          'default': () => {
              res.status(406).send('Not Acceptable');
          }
      })
  }

  // render the error page
  if(500 === err.status) {
        return res.send({message: 'error occur'});
    }
});

module.exports = app;
