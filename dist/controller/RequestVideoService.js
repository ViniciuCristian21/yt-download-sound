"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestVideoController = void 0;
const ytdl_core_1 = __importDefault(require("ytdl-core"));
class RequestVideoController {
    handle(req, res) {
        const url = String(req.query.url);
        const date = Date.now();
        try {
            res.header("Content-Disposition", `attachmentt; filename="sound_${date}.mp3"`);
            return (0, ytdl_core_1.default)(url).pipe(res);
        }
        catch (err) {
            console.log(err.message);
        }
    }
}
exports.RequestVideoController = RequestVideoController;
