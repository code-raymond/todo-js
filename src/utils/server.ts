import express,{ Application, json } from "express";
import RexLogger, { IRexLogger } from "./logger";
import cors from 'cors';
import APIRouter, { IAPIRoute } from "./route_config";

export interface IRexServer{
    app:Application;
    logger:IRexLogger;
    _port: Number;
    _apiRoute:IAPIRoute;
    run(): void
}

class RexServer implements IRexServer{
    app: Application;
    logger: IRexLogger;
    _apiRoute: IAPIRoute;
    _port: Number;
    _maxPayloadSize: Number;
    constructor(port:Number,maxPayloadSize:Number){
        this.app = express();
        this.logger = new RexLogger();
        this._port = port;
        this._maxPayloadSize= maxPayloadSize;
        this._apiRoute = new APIRouter(this.app);
    }
    

    _config(){
        this.app.use(cors());
        this.app.use(express.json({limit:`${this._maxPayloadSize}mb`}))
    }
    
    async run() {
       this.app.listen(this._port,()=>{
        this.logger.info(`App is running on PORT ${this._port}`);
       });
    };
}

export default RexServer;