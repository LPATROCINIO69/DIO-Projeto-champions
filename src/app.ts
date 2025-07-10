import express, {json, Request,Response} from "express";
import { getPlayer } from "./controllers/players-controller";
import router from "./routes/routes";
import cors from 'cors';


function createApp(){
    const app = express();
    app.use(json());
    app.use('/api', router);
    
    const corsOptions = {
        origin:"http://localhost",
        methods:["GET","POST","DELETE","PATCH"]
    }
    app.use(cors(corsOptions)); 
    return app;
}

export default createApp;