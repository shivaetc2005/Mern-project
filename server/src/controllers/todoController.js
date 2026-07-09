const Todo = require("../models/Todo");

const getTodos = async (req, res) => {
    try {

        const todos = await Todo.find();

        res.status(200).json({
            success: true,
            count: todos.length,
            data: todos
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

const createTodo = async (req, res) => {
    try {

        const todo = await Todo.create(req.body);

        res.status(201).json({
            success: true,
            message: "Todo created successfully",
            data: todo
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = {
    getTodos,
    createTodo
};