import {NextFunction, Request, Response} from "express";


export {errorHandler};

const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  if(res.headersSent) {
    return next(error);
  } else {
    console.log(error);
    return res.status(500).json({status: "error"});
  }
};
