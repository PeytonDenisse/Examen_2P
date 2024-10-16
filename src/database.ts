import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv';
import { Tarea } from "./models/todo.list";



dotenv.config();

const sequelize = new Sequelize( {
    host: process.env.DB_HOST!,
    username: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    port: 3306, 
    dialect: 'mysql',
    models:[Tarea]
  });

  export default sequelize;