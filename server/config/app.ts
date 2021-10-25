//Student Name: Ferdowsi Rumi
//Student Number: 301168815
//Date: OCT 1st, 2021


// installed 3rd party packages
import createError, { HttpError } from "http-errors";
import express from 'express';
import path from 'path';
import cookieParser from "cookie-parser";
import logger from 'morgan';
import mongoose from 'mongoose';
import passport from 'passport';
import MongoStore from "connect-mongo";
import session from "express-session";
import flash from 'connect-flash';
import { NextFunction } from 'express';

//db
import * as DBConfig from './db';
import { isLoggedIn } from "../middlewares/auth";



const StoreOptions = {
  store: MongoStore.create({
    mongoUrl: (DBConfig.RemoteURI) ? DBConfig.RemoteURI : DBConfig.LocalURI
  }),
  secret: DBConfig.Secret,
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 600000
  }
}

import indexRouter from '../routes/index';
import userRouter from '../routes/users';
import contactRouter from '../routes/contact';
import { UserDisplayName } from "../utils";

//db config connection

//DB Configuration
console.log("remoete uri", DBConfig.RemoteURI);
mongoose.connect((DBConfig.RemoteURI) ? DBConfig.RemoteURI : DBConfig.LocalURI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function () {
  console.log('connected to MongoDB at:' + DBConfig.HostName);
});
// application config
const app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs'); // express  -e

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../public/static')));
app.use(express.static(path.join(__dirname, '../../node_modules')));


//  connect-flash initialization
app.use(flash());

//express session initialization
app.use(session(StoreOptions));

//passport initialization
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/auth', userRouter);
app.use('/contact', isLoggedIn, contactRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err:HttpError, req: express.Request, res:express.Response, next:express.NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'Error', displayName:UserDisplayName(req)});
});

export default  app;
