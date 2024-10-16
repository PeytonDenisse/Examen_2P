"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const database_1 = __importDefault(require("./database"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', routes_1.default);
app.listen(3005, () => {
    console.log('Servidor corriendo en el puerto 3005');
});
database_1.default.sync().then(() => {
    console.log('Connected to the database');
});
