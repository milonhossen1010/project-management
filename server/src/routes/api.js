const express = require("express");
const { UpdateUser, Login, Registration} = require("../controllers/UsersController");
const router = express.Router();
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware");
const { createTask, deleteTaks, updateTaskStatus, listTaskByStatus, taskStatusCount } = require("../controllers/TasksCongroller");



//User
router.post("/registration", Registration);
router.post("/login", Login);
router.post('/updateUser', AuthVerifyMiddleware, UpdateUser);

//Tasks
router.post('/createTask', AuthVerifyMiddleware, createTask);
router.get("/deleteTasks/:id", AuthVerifyMiddleware, deleteTaks);
router.post("/updateTaskStatus/:id/:status", AuthVerifyMiddleware, updateTaskStatus);
router.get("/listTaskByStatus/:status", AuthVerifyMiddleware, listTaskByStatus);
router.get('/taskStatusCount', AuthVerifyMiddleware, taskStatusCount);

module.exports = router;