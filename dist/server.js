"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("express-async-errors");
require("./database/connection");
const routes_1 = __importDefault(require("./routes"));
const handler_1 = __importDefault(require("./errors/handler"));
const body_parser_1 = __importDefault(require("body-parser"));
const port = process.env.PORT || 3333;
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use(cors_1.default());
app.use(routes_1.default);
app.use(handler_1.default);
app.listen(port);
