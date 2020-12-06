import {NextFunction, Request, Response} from "express";
import service from "../../services/service";

/**
 * Description
 */
export default async (req: Request, res: Response, next: NextFunction) => {
  try {

    /**
     * Get vars from a session
     */
    const sessionId: unknown = req.session?.id;

    /**
     * Get vars from url
     */
    const fromUrl: unknown = req.params.fromUrl;

    /**
     * Get vars from previous middleware
     */
    const fromPreviousMiddleware: unknown = res.locals.fromPreviousMiddleware;

    /**
     * Get vars from the body
     */
    const fromBody: unknown = req.body.fromBody;

    /**
     * Get vars from headers
     */
    const fromHeaders: unknown = req.headers.fromHeaders;

    await service({});

    return res.status(200).json({});

  } catch (error) {

    return next(error);
  }
}