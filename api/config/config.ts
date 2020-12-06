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
    proxy: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 58,
      path: '/',
      httpOnly: true,
      secure: false,
      sameSite: false,
    },
    saveUninitialized: true,
    store: (() => {
      const mongoDBStore = require('connect-mongodb-session')(require('express-session'),);
      return new mongoDBStore({
        uri: process.env.DATABASE_SESSIONS_URL,
        collection: process.env.SESSION_COLLECTION,
      })
    })(),
    name: process.env.SESSION_NAME,
  },

  ////////////////////////////////////
  //          DATABASE              //
  ////////////////////////////////////
  database: {
    url: process.env.DATABASE_URL!,
  },

  ////////////////////////////////////
  //          SLACK                 //
  ////////////////////////////////////
  slacker: {
    slackBotV2: process.env.SLACK_API_URL!,
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
