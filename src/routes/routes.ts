import express, { Request, Response, Router } from "express";
import { Tarea } from '../models/todo.list';


const app = Router();
app.use(express.json());

// Obtener todas las tareas
app.get('/', async (req: Request, res: Response) => {
    try {
        const tareas = await Tarea.findAll();
        res.json(tareas);
    } catch (error) {
        res.status(500).json({
            message: 'Hubo un error al obtener las tareas',  
        });
    }
});




// Crear una nueva tarea
app.post('/', async (req:  Request, res: Response) : Promise<any> => {
    try {
        const { title, description, completed } = req.body;
        const nuevaTarea = await Tarea.create({
            title,
            description,
            completed
        });
        return res.status(201).json(nuevaTarea);
    } catch (error) {
        return res.status(500).json({
            message: "Hubo un error al crear la tarea",
           
        });
    }
});

// Actualizar una tarea por ID
app.put('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const tarea = await Tarea.findByPk(id);
        if (tarea) {
            await tarea.update(req.body);
            res.json(tarea);
        } else {
            res.status(404).json({ message: "Tarea no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: "Hubo un error al actualizar la tarea" });
    }
});

// Eliminar una tarea por ID
app.delete('/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const tarea = await Tarea.findByPk(id);
        if (tarea) {
            await tarea.destroy();
            res.json({ message: "Tarea eliminada" });
        } else {
            res.status(404).json({ message: "Tarea no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: "Hubo un error al eliminar la tarea"});
    }
});

export default app;