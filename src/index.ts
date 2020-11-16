import express from 'express';

//inicializamos express desde una constante llamada app, que será la que tenga toda la funcionalidad que me aporta express como framework de node
const app = express();

//Configurando el servidor mediante los métodos que me da express.
app.set('port', 3000);

//levantar el servidor
app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
    console.log('hey');
});