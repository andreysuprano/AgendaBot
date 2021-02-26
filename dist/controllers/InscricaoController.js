"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmaIncricao = exports.getInscricoesEtiquetas = exports.getInscricoesPresentes = exports.getInscricoesPorNome = exports.deleteInscricao = exports.createInscricao = exports.getInscricoesPorCargo = exports.getInscricoesPorId = exports.getInscricoesPorCongregacoes = exports.getInscricoes = void 0;
const typeorm_1 = require("typeorm");
const Inscricao_1 = __importDefault(require("../models/Inscricao"));
exports.getInscricoes = async (request, response) => {
    const inscricoes = await typeorm_1.getRepository(Inscricao_1.default).find();
    return response.json(inscricoes);
};
exports.getInscricoesPorCongregacoes = async (request, response) => {
    const congregacaoParametro = request.params.congregacao;
    const inscricoes = await typeorm_1.getRepository(Inscricao_1.default).find({ where: { congregacao: congregacaoParametro } });
    return response.json(inscricoes);
};
exports.getInscricoesPorId = async (request, response) => {
    const idParametro = request.params.id;
    const inscricoes = await typeorm_1.getRepository(Inscricao_1.default).findOne({ where: { id: idParametro } });
    return response.json(inscricoes);
};
exports.getInscricoesPorCargo = async (request, response) => {
    const cargoParametro = request.params.cargo;
    if (cargoParametro) {
        const inscricoes = await typeorm_1.getRepository(Inscricao_1.default).find({ where: { cargo: cargoParametro } });
        return response.json(inscricoes);
    }
    else {
        response.send({ message: "Cargo é Obrigatório" }).sendStatus(400);
    }
};
exports.createInscricao = async (request, response) => {
    const inscricoes = await typeorm_1.getRepository(Inscricao_1.default).save(request.body);
    return response.json(inscricoes);
};
exports.deleteInscricao = async (request, response) => {
    const id = request.params.id;
    if (id) {
        const deletado = await typeorm_1.getRepository(Inscricao_1.default).delete(id);
        console.log(deletado);
        return response.status(200).json({ Message: 'Deletado com sucesso!' });
    }
    else {
        return response.status(400).json({ Message: 'Id ão pode ser vazio!' });
    }
};
exports.getInscricoesPorNome = async (request, response) => {
    const nomeParametro = request.params.nome;
    if (nomeParametro) {
        const inscricoes = await typeorm_1.getRepository(Inscricao_1.default).find({ where: { nome: nomeParametro } });
        return response.json(inscricoes);
    }
    else {
        response.send({ message: "Nome é Obrigatório" }).sendStatus(400);
    }
};
exports.getInscricoesPresentes = async (request, response) => {
    const inscricoes = await typeorm_1.getRepository(Inscricao_1.default).find({ where: { presenca5: 'presente' } });
    return response.json(inscricoes);
};
exports.getInscricoesEtiquetas = async (request, response) => {
    const inscricoes = await typeorm_1.getRepository(Inscricao_1.default).find({ order: { nome: 'ASC' } });
    return response.json(inscricoes);
};
exports.confirmaIncricao = async (request, response) => {
    const idConfirmar = request.params.id;
    const inscricoes = await typeorm_1.getRepository(Inscricao_1.default)
        .createQueryBuilder()
        .update(Inscricao_1.default)
        .set({
        presenca5: 'presente',
    })
        .where("id = :id", { id: idConfirmar })
        .execute();
    return response.json(inscricoes);
};
