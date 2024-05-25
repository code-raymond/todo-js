import { Router, Application, response, Request, Response, NextFunction } from "express";
import { IAPIRoute } from "../utils/route_config";
import IMessage from "../types/message.type";

class HealthRoute implements IAPIRoute{
    router: Router;
    _app: Router;
    constructor(app:Router){
        this._app = app;
        this.router = Router();
        this._app.use('/health',this.router);
        this.router.use('/',async(request:Request,response:Response<IMessage>,next:NextFunction)=>{
            const data:IMessage = {
                message: "App is working fine.",
                status: 200,
                log: "No logs available for this instance.",
                success: true
            };
            response.json(data)
        });
    }
   

}
export default HealthRoute;