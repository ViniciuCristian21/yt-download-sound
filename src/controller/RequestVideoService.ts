import { Request, Response} from "express";
import ytdl from 'ytdl-core';


class RequestVideoController {
    handle(req: Request, res: Response) {
        const url = String(req.query.url);
        const date = Date.now()
        try {
            res.header("Content-Disposition", `attachmentt; filename="sound_${date}.mp3"`);
    
            return ytdl(url).pipe(res);
            
        } catch (err) {
            console.log(err.message)
        }
    }
}


export {RequestVideoController}