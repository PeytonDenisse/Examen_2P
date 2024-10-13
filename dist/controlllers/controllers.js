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
exports.getTarea = exports.getTareas = void 0;
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
