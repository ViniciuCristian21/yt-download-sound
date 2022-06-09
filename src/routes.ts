import express from 'express';
import { RequestVideoController } from './controller/RequestVideoService';


export const routes = express.Router();

routes.get("/download", new RequestVideoController().handle);
