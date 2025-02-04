const express = require("express");
const { Registrtion, UpdateUser, Login } = require("../controllers/UsersController");
const router = express.Router();
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware");
const { createTask, deleteTaks, updateTaskStatus, listTaskByStatus } = require("../controllers/TasksCongroller");



//User
router.post("/registration", Registrtion);
router.post("/login", Login);
router.post('/updateUser', AuthVerifyMiddleware, UpdateUser);

//Tasks
router.post('/createTask', AuthVerifyMiddleware, createTask);
router.get("/deleteTasks/:id", AuthVerifyMiddleware, deleteTaks);
router.post("/updateTaskStatus/:id/:status", AuthVerifyMiddleware, updateTaskStatus);
router.get("/listTaskByStatus/:status", AuthVerifyMiddleware, listTaskByStatus);

module.exports = router;