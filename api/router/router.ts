import express from "express";
import hasUserRights from "../middlewares/access/hasUserRights";
import controller from "./controllers/controller";

export {router};

const router = express.Router();

router.get('/:fromUrl(val1|val2)', hasUserRights("parameter"), controller);