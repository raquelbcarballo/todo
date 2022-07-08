let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let morgan = require('morgan');
let cors = require('cors')

let indexRouter = require('./routes/index');
let apiRouter = require('./routes/api');

const NODE_ENV = process.env.NODE_ENV || 'development'

let app = express();

if (NODE_ENV === 'development'){
  app.use(morgan('dev'));
} else {
  app.use(
    morgan('combined', {
      skip(_req, res) {
        return res.statusCode < 400;
      }
    })
  );
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err })});

module.exports = app;