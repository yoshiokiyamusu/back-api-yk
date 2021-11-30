"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tasks = require("../controllers/tasks");

var router = (0, _express.Router)();
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

router.get('/tasks', _tasks.getTasks);
/**
 * @swagger
 * /tasks/count:
 *  get:
 *    summary: Count quantity of Tasks
 *    tags: [Other]
 */

router.get('/tasks/count', _tasks.getTasksCount); //Colocar esta ruta antes que la ruta :id para que no interprete "count" como la variable id

router.get('/tasks/:id', _tasks.getTask);
router.post('/tasks', _tasks.saveTask);
router["delete"]('/tasks/:id', _tasks.deleteTask);
router.put('/tasks/:id', _tasks.updatetask);
var _default = router;
exports["default"] = _default;