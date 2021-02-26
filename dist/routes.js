"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const InscricaoController_1 = require("./controllers/InscricaoController");
//import { getId } from './Controller/PaymentController';
const express_2 = __importDefault(require("express"));
const UsuarioController_1 = require("./controllers/UsuarioController");
const app = express_2.default();
const routes = express_1.Router();
routes.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Header', '*');
    if (request.method === 'OPTIONS') {
        response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        return response.status(200).json({});
    }
    next();
});
/*const optCors = {
    origin: 'localhost:8080/',
    optionsSuccessStatus: 200
}*/
routes.get('/inscricao', InscricaoController_1.getInscricoes);
routes.get('/inscricao/presentes', InscricaoController_1.getInscricoesPresentes);
routes.get('/inscricao/etiquetas', InscricaoController_1.getInscricoesEtiquetas);
routes.get('/inscricoes/:congregacao', InscricaoController_1.getInscricoesPorCongregacoes);
routes.get('/inscricoes/cargo/:cargo', InscricaoController_1.getInscricoesPorCargo);
routes.get('/inscricoes/nome/:nome', InscricaoController_1.getInscricoesPorNome);
routes.get('/inscricoes/id/:id', InscricaoController_1.getInscricoesPorId);
routes.post('/inscricao', InscricaoController_1.createInscricao);
routes.post('/confirmar/:id', InscricaoController_1.confirmaIncricao);
routes.post('/authUser', UsuarioController_1.authUser);
routes.delete('/inscricoes/id/:id', InscricaoController_1.deleteInscricao);
//routes.get('/payments/globalid', getId);
exports.default = routes;
