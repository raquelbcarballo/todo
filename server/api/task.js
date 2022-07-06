const {models} = require("../models");


exports.readAll = async (req, res, next) => {
    try {
        const tasks = await models.Task.findAll();
        res.json(tasks);
    } catch (error) {
        next(error);
    }
};

exports.create = async (req, res, next) => {
    try {
        // await req.load.quiz.addFan(tokenUserId);
        res.send(200);
    } catch (error) {
        next(error);
    }
};

exports.update = (req, res, next) => {
    res.json({"1":"despertarme"});
};

exports.readOne = (req, res, next) => {
    res.json({"1":"despertarme"});
};


exports.delete = async (req, res, next) => {
    try {
        // await req.load.quiz.removeFan(tokenUserId);
        res.send(200);
    } catch (error) {
        next(error);
    }
};