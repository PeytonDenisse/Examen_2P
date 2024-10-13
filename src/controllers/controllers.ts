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
};

//post crear una tarea
export const createTarea = async (req: Request, res: Response) => {
    try {
        const nuevaTarea = await Tarea.create(req.body);
        res.json(nuevaTarea);
    } catch (error) {
        res.status(500).json({ message: "Tarea no creada"});
    }
};

//put actualizar una tarea
export const updateTarea = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const tarea = await Tarea.findByPk(id);
        if (tarea) {
            tarea.update(req.body);
            res.json(tarea);
        } else {
            res.status(404).json({ message: "Tarea no encontrada"});
        }
    } catch (error) {
        res.status(500).json({ message: "Hubo un error al actualizar la tarea"});
    }
};

//delete eliminar una tarea
export const deleteTarea = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const tarea = await Tarea.findByPk(id);
        if (tarea) {
            tarea.destroy();
            res.json({ message: "Tarea eliminada"});
        } else {
            res.status(404).json({ message: "Tarea no encontrada"});
        }
    } catch (error) {
        res.status(500).json({ message: "Hubo un error al eliminar la tarea"});
    }
};
