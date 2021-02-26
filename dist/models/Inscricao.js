"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let Inscricao = class Inscricao {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Inscricao.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Inscricao.prototype, "nome", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Inscricao.prototype, "telefone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Inscricao.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Inscricao.prototype, "congregacao", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Inscricao.prototype, "cargo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Inscricao.prototype, "statusPagamento", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Inscricao.prototype, "tipoPagamento", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Inscricao.prototype, "presenca1", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Inscricao.prototype, "presenca2", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Inscricao.prototype, "presenca3", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Inscricao.prototype, "presenca4", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Inscricao.prototype, "presenca5", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Inscricao.prototype, "created_at", void 0);
__decorate([
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Inscricao.prototype, "updated_at", void 0);
Inscricao = __decorate([
    typeorm_1.Entity()
], Inscricao);
exports.default = Inscricao;
