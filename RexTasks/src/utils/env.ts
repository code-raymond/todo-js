import {config} from "dotenv";

config();

export const port  = Number(process.env.PORT);
export const maxUploadFileSize = Number(process.env.MAX_UPLOAD_FILE_SIZE);