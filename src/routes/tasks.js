import { Router } from "express";
import {  
    getTasks, getTask, getTasksCount, saveTask, deleteTask, updatetask
} from "../controllers/tasks";


const router = Router();

/**
 * @swagger
 * tags:
 *  name: Tasks
 *  description: tasks endpoint
*/
/**
 * @swagger
 * tags:
 *  name: Other
 *  description: other endpoint
*/

/**
 * @swagger
 * /tasks:
 *  get:
 *    summary: Get all Tasks
 *    tags: [Tasks]
 */
router.get('/tasks',getTasks);

/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: Count quantity of Tasks
 *    tags: [Other]
 */
router.get('/tasks/count',getTasksCount);  //Colocar esta ruta antes que la ruta :id para que no interprete "count" como la variable id
router.get('/tasks/:id',getTask);
router.post('/tasks',saveTask);
router.delete('/tasks/:id',deleteTask);
router.put('/tasks/:id',updatetask);

export default router;