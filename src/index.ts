import express from "express";
import routes from './routes/routes';
import  sequelize  from './database';



const app = express();
app.use(express.json());

app.use('/', routes);

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3005');
});

sequelize.sync().then(() => {
    console.log('Connected to the database');
  });