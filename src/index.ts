import express from 'express';
import indexRouter from './routes';
import ProductsRoutes from './routes/products.routes';

//inicializamos express desde una constante llamada app, que será la que tenga toda la funcionalidad que me aporta express como framework de node
const app = express();

//Configurando el servidor mediante los métodos que me da express.
app.set('port', 3000);

//levantar el servidor
app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
    console.log('hey');
});

//Hacemos uso del método use de Express, porque
app.use('/clients', indexRouter);
// app.use('/products', ProductsRoutes);