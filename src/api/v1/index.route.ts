import {  Request, Response, Router } from "express";
import { IHttpMessage } from "../../common/interfaces/IHttpMessage";

const v1Router = Router();

v1Router.get('/health',(req:Request,res:Response)=>{
    const _response:IHttpMessage = {
        status:200,
        isSuccess:true,
        message: `Application is ok, annd running fine.`,
        type: `HEALTH`,
        stackTrace: ``,
        timeStamp: new Date().toUTCString(),
        agent: req?.ip?.toString()||''
    };
    res.status(200).json(_response);
});

export default v1Router;