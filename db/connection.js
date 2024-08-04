import { Sequelize } from "sequelize";


export const sequelizeInstance = new Sequelize('assignment6', 'root', '', {
    host: 'localhost',
    dialect: "mysql"
  });

const db_connection=async()=>{

  try {
    await sequelizeInstance.sync({alter:true , force: true });
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
export default db_connection;