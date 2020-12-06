import {NextFunction, Request, Response} from "express";


export {noRoute404};

const noRoute404 = (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(404).json({
      status: "404: Endpoint does not exist",
    });
  } catch (error) {
    return next(error);
  }
};