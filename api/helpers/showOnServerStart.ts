import {config} from "../config/config";

export {showOnServerStart};

const showOnServerStart: any = () => {
  console.log(`---- NODE_ENV is set to ${process.env.NODE_ENV}`);
  console.log(`---- Server is listening on port ${config.port}`);
};