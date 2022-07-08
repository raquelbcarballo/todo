let express = require('express');
let router = express.Router();


const taskApi = require('../api/task');

router.get('/status',
    (_req, res, _next) => {
        res.json({status: "ok"})
    });

router.get('/tasks',
    taskApi.readAll);

router.post('/tasks',
    taskApi.create);

router.get('/tasks/:taskId(\\d+)',
    taskApi.readOne);

router.put('/tasks/:taskId(\\d+)',
    taskApi.update);

router.delete('/tasks/:taskId(\\d+)',
    taskApi.delete);

module.exports = router;