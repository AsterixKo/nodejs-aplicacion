import express from 'express';
import indexRouter from './routes';//aquí me ahorro el index
import productRoutes from './routes/products.routes';
import expressHandlerbars from 'express-handlebars';
import path from 'path';

//inicializamos express desde una constante llamada app, que será la que tenga toda la funcionalidad que me aporta express como framework de node
const app = express();

//Configurando el servidor mediante los métodos que me da express.
app.set('port', 3000);

//---------------Views setup
//Setteando la carpeta de vistas para express
app.set('views', path.join(__dirname, 'views'));

//Configuramos express para funcionar como motor de plantillas
app.engine('.hbs', expressHandlerbars(
    {
        extname: '.hbs',
        layoutsDir: path.join(app.get('views'), 'layouts'),
        partialsDir: path.join(app.get('views'), 'partials'),
        defaultLayout: 'main'
    }
));

app.set('view engine', '.hbs');
//---------------end views setup

//levantar el servidor
app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
    console.log('hey');
});

//Hacemos uso del método use de Express, porque
app.use('/clients', indexRouter);
app.use('/products', productRoutes);