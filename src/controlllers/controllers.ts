import { Request, Response } from "express";
import { Tarea } from '../models/todo.list'


//get obtener todas las tareas 
export const getTareas = async (req: Request, res: Response) => {
    try {
        const tareas = await Tarea.findAll();
        res.json(tareas);
    } catch (error) {
        res.status(500).json({
            message: 'Hubo un error al obtener las tareas'
        });
    }
}

//get obtener una tarea por id
export const getTarea = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const tarea = await Tarea.findByPk(id);
        res.json(tarea);
    } catch (error) {
        res.status(500).json({
            message: 'Hubo un error al obtener la tarea'
        });
    }
}