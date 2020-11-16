"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//inicializamos express desde una constante llamada app, que será la que tenga toda la funcionalidad que me aporta express como framework de node
const app = express_1.default();
//Configurando el servidor mediante los métodos que me da express.
app.set('port', 3000);
//levantar el servidor
app.listen(app.get('port'), () => {
    console.log(`Server is running on port ${app.get('port')}`);
});
