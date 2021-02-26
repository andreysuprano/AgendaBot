"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authUser = void 0;
const typeorm_1 = require("typeorm");
const Usuario_1 = __importDefault(require("../models/Usuario"));
exports.authUser = async (request, response) => {
    const usuario = request.body;
    if (request.body) {
        const usernameParametro = request.body.username;
        const senhaParametro = request.body.senha;
        const usuario = await typeorm_1.getRepository(Usuario_1.default).findOne({ where: [{ username: usernameParametro }] });
        var usuarioLogado;
        if (usuario) {
            if (usuario.senha == senhaParametro) {
                usuarioLogado = {
                    auth: true,
                    user_id: usuario.id,
                    user: usernameParametro
                };
                return response.json(usuarioLogado);
            }
            else {
                return response.status(401).send({ Message: "Usuário ou senha incorretos!" });
            }
        }
        else {
            return response.status(401).send({ Message: "Usuário ou senha incorretos!" });
        }
    }
    else {
        return response.status(401).send({ Message: "Usuário ou senha são Obrigatórios!" });
    }
};
