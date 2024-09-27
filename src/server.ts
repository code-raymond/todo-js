import express,{ Application } from "express";
import cors from 'cors';
import apiRouter from "./api";
import { port } from "./utils/env.const";
import logger from "./utils/logger";

export interface IServer{
    app: Application;
    run():void;
}

class TodoServer implements IServer{
    app: Application;

    constructor(){
        this.app = express();
        this.app.use(cors());
        this.app.use('/api',apiRouter);
    }
    run(): void {
       this.app.listen(port,()=>{
        logger.info(`App is running on port ${port}`);
       });
    }
}
export default TodoServer;