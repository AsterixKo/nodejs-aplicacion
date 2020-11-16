import express from 'express';
import { ClientModel } from './models/client.model';

//inicializamos express desde una constante llamada app, que será la que tenga toda la funcionalidad que me aporta express como framework de node
const app = express();

//Configurando el servidor mediante los métodos que me da express.
app.set('port', 3000);

//levantar el servidor
app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
    console.log('hey');
});

app.get('/test-url', (req, res) => {
    console.log('Hola esta es la respuesta de mi URL / Recurso en la ruta url /test-url');

    res.send('Ok');
});

let listClients: ClientModel[] = [
    new ClientModel('1', 'John', 'Doe'),
    new ClientModel('2', 'Jane', 'Doe'),
    new ClientModel('3', 'Martin', 'Lopez'),
    new ClientModel('4', 'Juan', 'García'),
    new ClientModel('5', 'Beatriz', 'García')
];

app.get('/clients', (req, res) => {
    console.log('Hola esta es la respuesta de mi URL / Recurso en la ruta url /clients');

    res.send(listClients);
});

//Declaración de una ruta en node
//hacemos la petición con postman
app.get('/test-url-param/:paramName', (req, res) => {
    console.log(`Este es el contenido de req.params.paramName: ${req.params.paramName}`);
    res.send(`Este es el contenido de paramName: ${req.params.paramName}`);
});

//ponemos la petición sin parametro para que devuelva algo por defecto
app.get('/test-url-param/', (req, res) => {
    res.send(`Param url workin without param`);
});
