"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const todo_list_1 = require("../models/todo.list");
const app = (0, express_1.Router)();
app.use(express_1.default.json());
// Obtener todas las tareas
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tareas = yield todo_list_1.Tarea.findAll();
        res.json(tareas);
    }
    catch (error) {
        res.status(500).json({
            message: 'Hubo un error al obtener las tareas',
        });
    }
}));
// Crear una nueva tarea
app.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, completed } = req.body;
        const nuevaTarea = yield todo_list_1.Tarea.create({
            title,
            description,
            completed
        });
        return res.status(201).json(nuevaTarea);
    }
    catch (error) {
        return res.status(500).json({
            message: "Hubo un error al crear la tarea",
        });
    }
}));
// Actualizar una tarea por ID
app.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tarea = yield todo_list_1.Tarea.findByPk(id);
        if (tarea) {
            yield tarea.update(req.body);
            res.json(tarea);
        }
        else {
            res.status(404).json({ message: "Tarea no encontrada" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Hubo un error al actualizar la tarea" });
    }
}));
// Eliminar una tarea por ID
app.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tarea = yield todo_list_1.Tarea.findByPk(id);
        if (tarea) {
            yield tarea.destroy();
            res.json({ message: "Tarea eliminada" });
        }
        else {
            res.status(404).json({ message: "Tarea no encontrada" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Hubo un error al eliminar la tarea" });
    }
}));
exports.default = app;
