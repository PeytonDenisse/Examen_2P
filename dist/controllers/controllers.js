"use strict";
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
exports.deleteTarea = exports.updateTarea = exports.createTarea = exports.getTarea = exports.getTareas = void 0;
const todo_list_1 = require("../models/todo.list");
//get obtener todas las tareas 
const getTareas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tareas = yield todo_list_1.Tarea.findAll();
        res.json(tareas);
    }
    catch (error) {
        res.status(500).json({
            message: 'Hubo un error al obtener las tareas'
        });
    }
});
exports.getTareas = getTareas;
//get obtener una tarea por id
const getTarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tarea = yield todo_list_1.Tarea.findByPk(id);
        res.json(tarea);
    }
    catch (error) {
        res.status(500).json({
            message: 'Hubo un error al obtener la tarea'
        });
    }
});
exports.getTarea = getTarea;
//post crear una tarea
const createTarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
});
exports.createTarea = createTarea;
//put actualizar una tarea
const updateTarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tarea = yield todo_list_1.Tarea.findByPk(id);
        if (tarea) {
            tarea.update(req.body);
            res.json(tarea);
        }
        else {
            res.status(404).json({ message: "Tarea no encontrada" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Hubo un error al actualizar la tarea" });
    }
});
exports.updateTarea = updateTarea;
//delete eliminar una tarea
const deleteTarea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tarea = yield todo_list_1.Tarea.findByPk(id);
        if (tarea) {
            tarea.destroy();
            res.json({ message: "Tarea eliminada" });
        }
        else {
            res.status(404).json({ message: "Tarea no encontrada" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Hubo un error al eliminar la tarea" });
    }
});
exports.deleteTarea = deleteTarea;
