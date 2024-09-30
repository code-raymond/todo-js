import express, { Application } from "express";
import cors from 'cors';
import apiRouter from "./api";
import { port } from "./utils/env.const";
import logger from "./utils/logger";
import { sequelize } from "./utils/db";

export interface IServer {
    app: Application;
    run(): void;
}

class TodoServer implements IServer {
    app: Application;

    constructor() {
        this.app = express();
        this.app.use(cors());
        this.app.use('/api', apiRouter);

    }
    run(): void {
        sequelize.sync().then(() => {
            this.app.listen(port, () => {
                logger.info(`App is running on port ${port}`);
            });
        })
            .catch((error) => {
                console.error('Unable to sync the database:', error);
            });

    }
}
export default TodoServer;