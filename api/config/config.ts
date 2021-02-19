import fs from "fs";

export {config};

if (process.env.NODE_ENV !== 'production') {
  if (!require('dotenv').config()) {
    throw new Error('You must add a .env file');
  }
}

const config: any = {

  mode: process.env.MODE,

  ////////////////////////////////////
  //          PORT                  //
  ////////////////////////////////////
  port: process.env.PORT || 8000,

  ////////////////////////////////////
  //          CORS                  //
  ////////////////////////////////////
  cors: {
    origin: '*',
    credentials: true,
  },

  ////////////////////////////////////
  //          HELMET                //
  ////////////////////////////////////
  helmet: {},

  ////////////////////////////////////
  //          MORGAN                //
  ////////////////////////////////////
  logger: '[:date[clf]] - :remote-addr - :method - :url - :status - :response-time ms',

  ////////////////////////////////////
  //          PARSER                //
  ////////////////////////////////////
  bodyParser: {
    urlEncoded: {extended: true},
    json: {limit: 1_000_000},
  },

  ////////////////////////////////////
  //          SESSION               //
  ////////////////////////////////////
  expressSession: {
    secret: process.env.SESSION_SECRET,
    resave: true,
    proxy: process.env.MODE === "production",
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 58,
      path: '/',
      httpOnly: true,
      secure: false,
      sameSite: false,
    },
    saveUninitialized: true,
    store: (() => {
      const mongoDBStore = require('connect-mongodb-session')(require('express-session'));
      const mongoDBStoreOptions: any = {
        uri: process.env.DATABASE_SESSIONS_URL,
        collection: 'sessions',
        connectionOptions: {
          useUnifiedTopology: true,
          useNewUrlParser: true,
        },
      };
      // Use this if you use a pem file to connect the database
      // if (process.env.MODE === 'production') {
      //   mongoDBStoreOptions['connectionOptions']['sslCA'] = [
      //     fs.readFileSync(`${__dirname}/../certificates/rds-combined-ca-bundle.pem`),
      //   ];
      // }
      return new mongoDBStore(mongoDBStoreOptions);
    })(),
    name: process.env.SESSION_NAME,
  },

  ////////////////////////////////////
  //          DATABASE              //
  ////////////////////////////////////
  database: {
    url: process.env.DATABASE_URL,
  },

  ////////////////////////////////////
  //          SLACK                 //
  ////////////////////////////////////
  slacker: {
    slackBotV2: process.env.SLACK_API_URL,
  },

  ////////////////////////////////////
  //          TYPEGOOSE             //
  ////////////////////////////////////
  typegoose: {
    globalOptions: {
      useNewEnum: true,
    },
  },

  //////////////////////
  // version          //
  //////////////////////
  version: {},

};
