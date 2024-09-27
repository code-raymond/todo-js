import { Application, Router } from "express";
import HealthRoute from "../routes/health.route";

export interface IAPIRoute{
    router:Router;
    _app:Application|Router;
}

class APIRouter implements IAPIRoute{
    router: Router;
    _app: Application;
    _healthRoute:IAPIRoute;
    constructor(app:Application){
        this.router = Router();
        this._app = app;
        this._app.use('/api',this.router);
        this._healthRoute = new HealthRoute(this.router);   
    }
}
export default APIRouter;

