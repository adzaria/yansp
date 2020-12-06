import {NextFunction, Request, Response} from "express";

/**
 * Answer to the client
 */
export default (req: Request, res: Response, next: NextFunction) => {
  try {

    return res.status(200).end();

  } catch(error) {

    return next(error);
  }
}