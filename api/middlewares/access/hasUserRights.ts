import {NextFunction, Request, Response} from "express";
import testHasUserRights from "./dependenciesHasUserRights/testHasUserRights";

export default (parameter: string) => async(req: Request, res: Response, next: NextFunction) => {
  try {
    
    const allowAccess = await testHasUserRights({data: "data", parameter});

    if(!allowAccess) return next('Access denied');

    return next();

  } catch (error) {

    return next(error);
  }
}
