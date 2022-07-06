'use strict';

const {Model} = require('sequelize');

// Definition of the Task model:
module.exports = (sequelize, DataTypes) => {
    class Task extends Model {
    }

    Task.init({
            name: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "Task must not be empty"}}
            },
        }, {
            sequelize
        }
    );

    return Task;
};
