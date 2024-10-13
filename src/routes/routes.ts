import { Router } from "express";
import { getTareas, getTarea, createTarea, updateTarea, deleteTarea } from '../controllers/controllers'

const router = Router();

router.get('/tareas', getTareas);
router.get('/tareas/:id', getTarea);
router.post('/tareas', createTarea);
router.put('/tareas/:id', updateTarea);
router.delete('/tareas/:id', deleteTarea);