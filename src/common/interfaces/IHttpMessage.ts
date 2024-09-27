export interface IHttpMessage{
   status: number;
   isSuccess: boolean;
   type: string;
   message: string;
   stackTrace: string;
   agent: string;
   timeStamp: string; 
}