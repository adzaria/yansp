import express from "express";
import helmet from "helmet";
import logger from "morgan";
import cors from "cors";
import {config} from "./config/config";
import database from "./helpers/database";
import session from "express-session";
import {setGlobalOptions} from "@typegoose/typegoose";
import {errorHandler} from "./middlewares/errorHandler";
import {showOnServerStart} from "./helpers/showOnServerStart";
import pong from "./middlewares/pong";
import {noRoute404} from "./middlewares/noRoute404";
import compression from "compression";
import {router} from "./router/router";

(async() => {

  setGlobalOptions(config.typegoose);

  await database(config.database.url);

  const app: express.Application = express();

  app.enable('trust proxy');

  app.use(cors(config.cors));
  app.use(helmet(config.helmet));
  app.use(logger(config.logger));
  app.use(session(config.expressSession));
  app.use(express.urlencoded(config.bodyParser.urlEncoded));
  app.use(express.json(config.bodyParser.json));
  app.use(compression({}));

  app.use(router);

  app.get("/ping", pong);

  app.use('*', noRoute404);

  /* ------------------------------- <- Forbidden to add any route under this line */
  app.use(errorHandler);

  app.listen(config.port, showOnServerStart);

})();
