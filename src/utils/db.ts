import { Sequelize } from 'sequelize';
import { dilect, storage } from './env.const';

const dbConfig:any = {
    dialect:dilect,
};

if(dilect==='sqlite'){
    dbConfig["storage"] = storage
}

// Initialize Sequelize with SQLite
export const sequelize = new Sequelize(dbConfig);
