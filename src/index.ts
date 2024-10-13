import express from "express";
import routes from './routes/routes';

const app = express();
app.use(express.json());

app.use('/', routes);

app.listen(3005, () => {
    console.log('Servidor corriendo en el puerto 3005');
});