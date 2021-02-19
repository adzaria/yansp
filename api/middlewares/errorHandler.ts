import {NextFunction, Request, Response} from "express";
import log from "../helpers/log";


export {errorHandler};

const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  if(res.headersSent) {
    return next(error);
  } else {
    log(error);
    return res.status(500).json({status: "error"});
  }
};
