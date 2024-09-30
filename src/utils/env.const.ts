import { config } from "dotenv";
config();
export const port = Number(process.env.PORT);
export const dilect = (process.env.DB_DILECT); 
export const storage = String(process.env.DB_STORAGE);