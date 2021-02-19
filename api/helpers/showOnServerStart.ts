import {config} from "../config/config";
import log from "./log";

export {showOnServerStart};

const showOnServerStart: any = () => {
  log(`---- NODE_ENV is set to ${process.env.NODE_ENV}`);
  log(`---- Server is listening on port ${config.port}`);
};