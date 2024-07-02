import pino, { Logger } from "pino";

export interface IRexLogger{
    logger: Logger;
    info(strMsg:String):void;
    error(strMsg:String):void;
    warning(strMsg:String):void;
}

class RexLogger implements IRexLogger {
    logger:Logger;
    constructor(){
        this.logger= pino({
            transport:{
                target: "pino-pretty"
            }
        });
    }
    warning(strMsg: String): void {
       this.warning(strMsg);
    }
    info(strMsg: String): void {
        this.logger.info(strMsg)
    }
    error(strMsg: String): void {
       this.logger.error(strMsg)
    }
}

export default RexLogger;
