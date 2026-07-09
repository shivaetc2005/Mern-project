const Todo = require("../models/Todo");
const asyncHandler = require("../utils/asyncHandler");

const getTodos = asyncHandler(async (req, res) => {

    const todos = await Todo.find();

    res.status(200).json({
        success: true,
        count: todos.length,
        data: todos
    });

});

const createTodo = asyncHandler(async (req, res) => {

    const todo = await Todo.create(req.body);

    res.status(201).json({
        success: true,
        message: "Todo created successfully",
        data: todo
    });

});

const updateTodo = asyncHandler(async (req, res) => {

    const todo = await Todo.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true
        }
    );

    if (!todo) {
        res.status(404);
        throw new Error("Todo not found");
    }

    res.status(200).json({
        success: true,
        message: "Todo updated successfully",
        data: todo
    });

});

const deleteTodo = asyncHandler(async (req, res) => {

    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
        res.status(404);
        throw new Error("Todo not found");
    }

    res.status(200).json({
        success: true,
        message: "Todo deleted successfully"
    });

});

module.exports = {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo
};