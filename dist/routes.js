"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const RequestVideoService_1 = require("./controller/RequestVideoService");
exports.routes = express_1.default.Router();
exports.routes.get("/download", new RequestVideoService_1.RequestVideoController().handle);
