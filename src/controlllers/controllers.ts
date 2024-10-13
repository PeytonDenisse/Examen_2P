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