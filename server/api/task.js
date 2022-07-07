const { models } = require("../models");


exports.readAll = async (req, res, next) => {
    try {
        const tasks = await models.Task.findAll();
        res.json(tasks);
    } catch (error) {
        next(error);
    }
};

exports.readOne = async (req, res, next) => {
    try {
        const id=req.params.id;
        const task = await models.Task.findByPK(id);
        res.json(task);
    } catch (error) {
        next(error);
    }
};

exports.create = async (req, res, next) => {
    try {
        if (!req.body.name) {
            res.status(400).send({
                message: "Content can not be empty!"
            });
            return;
        }
        const task = {
            name: req.body.name
        };
        models.Task.create(task).then(data => res.send(data)).catch(err => {
            res.status(500).send({
                message:
                    err.message
            });
        });
    } catch (error) {
        next(error);
    }
};

exports.update =async (req, res, next) => {
    try {
        const id=req.params.id;
        await models.Task.update(req.body, {
            where: { id: id }
          });
    } catch (error) {
        next(error);
    }
};


exports.delete = async (req, res, next) => {
    try {
        const id=req.params.id;
        await models.Task.destroy({ where: { id: id } });
    } catch (error) {
        next(error);
    }
};