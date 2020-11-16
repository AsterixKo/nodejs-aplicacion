import { Router } from 'express';
import { ClientModel } from '../models/client.model';

const router: Router = Router();

router.get('/t')

router.get('/test-url', (req, res) => {
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

// router.get('/clients', (req, res) => {
router.get('/', (req, res) => {
    console.log('Hola esta es la respuesta de mi URL / Recurso en la ruta url /clients');

    res.send(listClients);
});

//Declaración de una ruta en node
//hacemos la petición con postman
// router.get('/client/:id', (req, res) => {
router.get('/:id', (req, res) => {
    console.log(`Este es el contenido de req.params.paramName: ${req.params.id}`);
    const client = listClients.filter(value => value.id === req.params.id);
    res.send(client);
});

//ponemos la petición sin parametro para que devuelva algo por defecto
// router.get('/client/', (req, res) => {
router.get('/', (req, res) => {
    res.send(`Param url working without param`);
});

//Declaración de una ruta en node
//hacemos la petición con postman
router.get('/test-url-param/:paramName', (req, res) => {
    console.log(`Este es el contenido de req.params.paramName: ${req.params.paramName}`);
    res.send(`Este es el contenido de paramName: ${req.params.paramName}`);
});

//ponemos la petición sin parametro para que devuelva algo por defecto
router.get('/test-url-param/', (req, res) => {
    res.send(`Param url working without param`);
});

export default router;