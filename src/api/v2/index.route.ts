import {  Request, Response, Router } from "express";
import { IHttpMessage } from "../../common/interfaces/IHttpMessage";

const v2Router = Router();

v2Router.get('/health',(req:Request,res:Response)=>{
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

export default v2Router;